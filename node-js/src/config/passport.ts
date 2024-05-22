import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { prisma } from './database'
import bcryptjs from 'bcryptjs'

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, callback) => {
    const user = await prisma.user.findFirst({ where: { email } })
    if (!user) return callback(null, false, { message: 'E-mail ou senha incorretos' })
    const match = await bcryptjs.compare(password, user.password)
    if (!match) return callback(null, false, { message: 'E-mail ou senha incorretos' })
    return callback(null, user, { message: `Bem-vindo(a) ${user.name}!` })
  })
)

passport.serializeUser((user, callback) => callback(null, user.id))

passport.deserializeUser<string>(async (id, callback) => {
  const user = await prisma.user.findUnique({ where: { id } })
  callback(null, user)
})
