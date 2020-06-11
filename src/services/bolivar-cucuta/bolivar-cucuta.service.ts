import { config } from './bolivar-cucuta.config'
import { BaseService } from '../base/base.service'

export class BolivarCucutaService extends BaseService {
  static async getPrice () {
    const data = await this.getData(config.API_URL)
    return data.USDVEF.dolarcucuta_efe
  }
}
