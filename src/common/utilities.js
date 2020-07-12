import moment from 'moment'

export const priceFormat = (amount, currency) => {
  const prefix = currency === 'ARS' ? '$' : currency
  return `${prefix} ${amount}`
}

export const addressFormat = (address, zone, city) => {
  return `${address}, ${zone}, ${city}`
}

export const getDiffDays = oldDate => {
  return moment().diff(moment(oldDate, ['DD-MM-YYYY']), 'days')
}

export const publicationFormat = publication_plan => {
  return publication_plan === 'SUPERHIGHLIGHTED' ? 'Super Destacado' :
    publication_plan === 'HIGHLIGHTED' ? 'Destacado' : 'Simple'
}

