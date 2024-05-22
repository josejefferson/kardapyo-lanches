import { create } from 'express-handlebars'

export const hbs = create({
  helpers: {
    /** Formato de moeda */
    currency: (value: number) =>
      Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(value),

    /** Retorna true se a data é recente há 1 dia */
    isNew: (date: string) => new Date().getTime() < new Date(date).getTime() + 1000 * 60 * 60 * 24,

    /** Retorna as iniciais de um nome */
    userInitials: (name: string) =>
      name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
  }
})
