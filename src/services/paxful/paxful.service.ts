import { config } from './paxful.config'
import { BaseService } from '../base/base.service'

export class PaxfulService extends BaseService {
  static async getPrice () {
    const data = await this.getData(config.API_URL)
    return data.data.rate.usd as number
  }
}
