import axios from 'axios'
import * as _ from 'lodash'
import { IBaseConfig } from './base.config'
import { appConfig } from '../../app.config'

export class BaseService {
  // Set request max timeout (ms), default: 5 seconds
  public static requestTimeout: number

  protected static config: IBaseConfig

  protected static getOverPrice (min: number, max: number) {
    return (1 + (_.random(min, max, true) / 100))
  }

  protected static getTimeout () {
    return this.requestTimeout || appConfig.requestTimeout
  }

  protected static async getData (url: string, params?) {
    // Prevent cache
    params = params || {}
    params.unix = new Date().getTime()
    // Send request
    const { data } = await axios({
      url,
      params,
      timeout: this.getTimeout()
    })
    return data
  }

  static async getPrice (url?: string): Promise<number> {
    const { config } = this
    const rateUrl = url || config.API_URL
    if (!config) {
      throw new Error('Property config must be defined')
    }
    const data = await this.getData(rateUrl)
    if (config.PATH) {
      return _.get(data, config.PATH)
    }
    return data
  }
}
