import { config } from './akbfintech.config'
import { BaseService } from '../base/base.service'

export class AKBfintechService extends BaseService {
  protected static config = config

  private static async altPrice () {
    const data = await AKBfintechService.getData(AKBfintechService.config.API_ALT)
    return data['0']
  }

  static async getPrice () {
    try {
      const data = await AKBfintechService.getData(AKBfintechService.config.API_URL)
      return data.original
    } catch (e) {
      return this.altPrice()
    }
  }
}
