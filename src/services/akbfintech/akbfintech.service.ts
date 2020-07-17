import { config } from './akbfintech.config'
import { ExchangemonitorService } from '../exchangemonitor/exchangemonitor.service'

export class AKBfintechService extends ExchangemonitorService {
  protected static config = config
}
