import axios from 'axios'
import * as _ from 'lodash'
import { IBaseConfig } from './base.config'

export class BaseService {
  protected static config: IBaseConfig

  protected static async getData (url: string, params?) {
    // Prevent cache
    params = params || {}
    params.unix = new Date().getTime()
    // Send request
    const { data } = await axios({
      url,
      params
    })
    return data
  }

  static async getPrice (): Promise<number> {
    const { config } = this
    if (!config) {
      throw new Error('Property config must be defined')
    }
    const data = await this.getData(config.API_URL)
    return _.get(data, config.PATH)
  }
}
