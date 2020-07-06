import { config } from './paxful.config'
import { BaseService } from '../base/base.service'

export class PaxfulService extends BaseService {
  protected static config = config
}
