import { config } from './akbfintech.config'
import { BaseService } from '../base/base.service'

export class AKBfintechService extends BaseService {
  protected static config = config
}
