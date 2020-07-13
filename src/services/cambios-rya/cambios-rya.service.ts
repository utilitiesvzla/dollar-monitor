import * as _ from 'lodash'
import { config } from './cambios-rya.config'
import { ExchangemonitorService } from '../exchangemonitor/exchangemonitor.service'

export class CambiosRYAService extends ExchangemonitorService {
  protected static config = config
}
