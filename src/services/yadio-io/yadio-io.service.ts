import { config } from './yadio-io.config'
import { BaseService } from '../base/base.service'

export class YadioIOService extends BaseService {
  protected static config = config
}
