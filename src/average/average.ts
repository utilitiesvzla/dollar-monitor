import * as dollarServices from '../services'
import { BaseService } from '../services/base/base.service'

export async function getAverage () {
  const services = Object.keys(dollarServices).filter(name => name !== dollarServices.PetroService.name && name !== dollarServices.PetroEmService.name)
  const total = await Promise.all(services.map((serviceName) => {
    const service = dollarServices[serviceName] as typeof BaseService
    return service.getPrice()
  }))
  const average = total.reduce((a, b) => a + b, 0) / services.length
  return average
}
