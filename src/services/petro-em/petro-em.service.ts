import { config } from './petro-em.config'
import { ExchangemonitorService } from '../exchangemonitor/exchangemonitor.service'

export class PetroEmService extends ExchangemonitorService {
  protected static config = config
}
