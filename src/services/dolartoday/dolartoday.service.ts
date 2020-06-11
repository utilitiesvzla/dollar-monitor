import axios from 'axios'
import { config } from './dolartoday.config'
import { BaseService } from '../base/base.service'

export class DolartodayService extends BaseService {
  static async getPrice () {
    const data = await this.getData(config.API_URL)
    return data.USD.dolartoday
  }
}
