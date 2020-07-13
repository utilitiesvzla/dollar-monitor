import { config } from './akbfintech.config'
import { BaseService } from '../base/base.service'

export class AKBfintechService extends BaseService {
  protected static config = config

  static async getPrice () {
    const value = await super.getPrice()
    return 1 / value
  }
}
