import { BaseService } from '../base/base.service'
import { config } from '../dolartoday/dolartoday.config'

export class LocalBitcoinService extends BaseService {
  static async getPrice () {
    const data = await this.getData(config.API_URL)
    return (data.USD.localbitcoin_ref + data.USD.bitcoin_ref) / 2
  }
}
