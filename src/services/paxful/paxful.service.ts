import { config } from './paxful.config'
import { BaseService } from '../base/base.service'

export class PaxfulService extends BaseService {
  protected static config = config

  static async getPrice () {
    const priceOne = await super.getPrice(config.API_URL)
    const priceTwo = await super.getPrice(config.API_URL_ALT)
    return ((priceOne + priceTwo) / 2) || priceOne || priceTwo
  }
}
