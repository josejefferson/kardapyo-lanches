/** Formato de moeda */
export function currency(value: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

/** Retorna true se a data é recente há 1 dia */
export function isNew(date: string) {
  return new Date().getTime() < new Date(date).getTime() + 1000 * 60 * 60 * 24
}

/** Retorna as iniciais de um nome */
export function userInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}
