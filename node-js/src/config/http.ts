import express from 'express'
import 'express-async-errors'
import flash from 'express-flash'
import session from 'express-session'
import passport from 'passport'
import path from 'path'
import { localsMiddleware } from '../middleware/locals'
import { routes } from '../routes'
import { hbs } from './handlebars'
import './passport'
import csurf from 'csurf'
import { notFound } from '@hapi/boom'
import { errorMiddleware } from '../middleware/error'

const app = express()

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, '../views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(
  session({
    secret: process.env.SESSION_SECRET || Math.random().toString(),
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 }
  })
)
app.use(csurf())
app.use(flash())
app.use(passport.initialize())
app.use(passport.authenticate('session'))
app.use(localsMiddleware)
app.use(routes)
app.all('*', () => {
  throw notFound()
})
app.use(errorMiddleware)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
