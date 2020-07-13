import axios from 'axios'
import * as _ from 'lodash'
import { IBaseConfig } from './base.config'
import { appConfig } from '../../app.config'

export class BaseService {
  // Set request max timeout (ms), default: 5 seconds
  public static requestTimeout: number

  protected static config: IBaseConfig

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

  static async getPrice (): Promise<number> {
    const { config } = this
    if (!config) {
      throw new Error('Property config must be defined')
    }
    const data = await this.getData(config.API_URL)
    if (config.PATH) {
      return _.get(data, config.PATH)
    }
    return data
  }
}
