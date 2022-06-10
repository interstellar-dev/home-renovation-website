type stringOrNumber = string | number

export interface IUseFooter {
  phone: string,
  date: stringOrNumber
}

export const useFooter = ():IUseFooter => {
  const phone:string = '+79617926799'

  const startYear = 2022
  const dotayYear = new Date().getFullYear()
  const date: stringOrNumber = startYear === dotayYear ? startYear : `${startYear} - ${dotayYear}`

  return {
    phone,
    date
  }
}
