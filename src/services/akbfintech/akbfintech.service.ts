import { config } from './akbfintech.config'
import { BaseService } from '../base/base.service'

const MIN = 3.5
const MAX = 5.7

export class AKBfintechService extends BaseService {
  protected static config = config

  private static async altPrice () {
    const data = await AKBfintechService.getData(AKBfintechService.config.API_ALT)
    return +data['0'] * this.getOverPrice(MIN, MAX)
  }

  static async getPrice () {
    try {
      const data = await AKBfintechService.getData(AKBfintechService.config.API_URL)
      return +data.original * this.getOverPrice(MIN, MAX)
    } catch (e) {
      return this.altPrice()
    }
  }
}
