import { TheAirTMServicePlain } from './service/the-airtm-plain.service'
import { TheAirTMServiceExchangeMonitor } from './service/the-airtm-exchange-monitor.service'

export class TheAirTMService {
  static async getPrice () {
    try {
      return await TheAirTMServicePlain.getPrice()
    } catch (e) {
      return TheAirTMServiceExchangeMonitor.getPrice()
    }
  }
}
