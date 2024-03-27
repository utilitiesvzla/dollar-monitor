import axios from 'axios'
import { config } from './petro.config'
import { BaseService } from '../base/base.service'
import { appConfig } from '../../app.config'

export class PetroService extends BaseService {
  static async getPrice (): Promise<number> {
    const { data: { data } } = await axios({
      method: 'POST',
      url: config.API_URL,
      data: {
        coins: ['PTR'],
        fiats: ['BS']
      },
      timeout: this.getTimeout()
    })
    return data.PTR.BS
  }
}
