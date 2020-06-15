import axios from 'axios'
import { config } from './petro.config'
import { BaseService } from '../base/base.service'

export class PetroService extends BaseService {
  static async getPrice (): Promise<number> {
    const { data: { data } } = await axios({
      method: 'POST',
      url: config.API_URL,
      data: {
        coins: ['PTR'],
        fiats: ['BS']
      }
    })
    return data.PTR.BS
  }
}

PetroService.getPrice()
