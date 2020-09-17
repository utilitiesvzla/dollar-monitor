import { config } from './akbfintech.config'
import { BaseService } from '../base/base.service'

export class AKBfintechService extends BaseService {
  protected static config = config

  static async getPrice () {
    const data = await AKBfintechService.getData(AKBfintechService.config.API_URL)
    return data.original
  }
}
