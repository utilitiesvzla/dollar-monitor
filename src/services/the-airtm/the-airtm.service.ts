import { config } from './the-airtm.config'
import { BaseService } from '../base/base.service'

export class TheAirTMService extends BaseService {
  static async getPrice () {
    const data = await this.getData(config.API_URL)
    return data.today?.VES_BANK?.buy || data.yesterday?.VES_BANK?.buy
  }
}
