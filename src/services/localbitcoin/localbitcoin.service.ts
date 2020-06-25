import { BaseService } from '../base/base.service'
import { config } from './localbitcoin.config'
import { DolartodayBtcService } from '../dolartoday-btc/dolartoday-btc.service'

const VALUE_KEY = 'avg_1h'

export class LocalBitcoinService extends BaseService {
  static async getPrice () {
    const data = await this.getData(config.API_URL)

    const localBitcoinValue = +data.VES[VALUE_KEY] / +data.USD[VALUE_KEY]
    const dolarTodayBtcValue = await DolartodayBtcService.getPrice()

    return Math.max(localBitcoinValue, dolarTodayBtcValue)
  }
}
