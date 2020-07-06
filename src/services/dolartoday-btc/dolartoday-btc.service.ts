import { BaseService } from '../base/base.service'
import { config } from './dolartoday-btc.config'

export class DolartodayBtcService extends BaseService {
  protected static config = config
}
