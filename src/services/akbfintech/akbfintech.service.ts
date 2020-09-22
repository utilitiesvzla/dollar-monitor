import { config } from './akbfintech.config'
import { BaseService } from '../base/base.service'

const MIN = 3.5
const MAX = 5.7

export class AKBfintechService extends BaseService {
  protected static config = config

  static async getPrice () {
    const data = await AKBfintechService.getData(AKBfintechService.config.API_URL)
    return 1 / +data.original
  }
}
