import { config } from './localbitcoin.config'
import { BaseService } from '../base/base.service'

export class LocalBitcoinService extends BaseService {
  static config = config

  static async getPrice () {
    const data = await LocalBitcoinService.getData(config.API_URL)
    const {
      USD,
      VES
    } = data
    return +VES.avg_1h / +USD.avg_24h
  }
}
