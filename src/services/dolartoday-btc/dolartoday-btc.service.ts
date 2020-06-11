import { BaseService } from '../base/base.service'
import { config } from '../dolartoday/dolartoday.config'

export class DolartodayBtcService extends BaseService {
  static async getPrice () {
    const data = await this.getData(config.API_URL)
    return data.USD.bitcoin_ref as number
  }
}
