import * as dollarServices from '../services'

export async function getAverage () {
  const services = Object.keys(dollarServices)
  let total = 0
  for (const service of services) {
    total += await dollarServices[service].getPrice()
  }
  const average = total / services.length
  return average
}
