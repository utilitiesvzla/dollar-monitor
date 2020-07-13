import * as _ from 'lodash'
import { config } from './mkambio.config'
import { ExchangemonitorService } from '../exchangemonitor/exchangemonitor.service'

export class MkambioService extends ExchangemonitorService {
  protected static config = config
}
