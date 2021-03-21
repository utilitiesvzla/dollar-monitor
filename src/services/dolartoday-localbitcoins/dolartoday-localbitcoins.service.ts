import { BaseService } from '../base/base.service'
import { config } from './dolartoday-localbitcoins.config'

export class DolartodayLocalbitcoinService extends BaseService {
  protected static config = config
}
