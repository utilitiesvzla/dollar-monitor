import * as _ from 'lodash'
import { config } from './dolar-cucuta.config'
import { ExchangemonitorService } from '../exchangemonitor/exchangemonitor.service'

export class DolarCucutaService extends ExchangemonitorService {
  protected static config = config
}
