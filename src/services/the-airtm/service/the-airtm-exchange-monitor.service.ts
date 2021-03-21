import { ExchangemonitorService } from '../../exchangemonitor/exchangemonitor.service'
import { config } from '../the-airtm.exchangemonitor-config'

export class TheAirTMServiceExchangeMonitor extends ExchangemonitorService {
  protected static config = config
}
