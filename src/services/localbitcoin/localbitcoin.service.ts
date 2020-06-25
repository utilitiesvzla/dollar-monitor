import { BaseService } from '../base/base.service'
import { config } from './localbitcoin.config'

export class LocalBitcoinService extends BaseService {
  static async getPrice () {
    const data = await this.getData(config.API_URL)
    const usdPerBtc = +data.USD.avg_1h
    const vesPerBtc = +data.VES.avg_1h
    return +(vesPerBtc / usdPerBtc)
  }
}
