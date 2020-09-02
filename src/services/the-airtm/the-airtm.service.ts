import { config } from './the-airtm.config'
import { ExchangemonitorService } from '../exchangemonitor/exchangemonitor.service'

export class TheAirTMService extends ExchangemonitorService {
  private config = config
}
