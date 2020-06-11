import { config } from './yadio-io.config'
import { BaseService } from '../base/base.service'

export class YadioIOService extends BaseService {
  static async getPrice () {
    const data = await this.getData(config.API_URL)
    return data.USD.rate
  }
}
