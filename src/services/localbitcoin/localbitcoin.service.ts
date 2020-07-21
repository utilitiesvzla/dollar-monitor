import { config } from './localbitcoin.config'
import { ExchangemonitorService } from '../exchangemonitor/exchangemonitor.service'

export class LocalBitcoinService extends ExchangemonitorService {
  static config = config
}
