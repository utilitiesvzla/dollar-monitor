import axios from 'axios'
import { config } from './binance-usdt.config'
import { BaseService } from '../base/base.service'

export class BinanceUsdtService extends BaseService {
  protected static config = config

  protected static async getData (url: string) {
    const {
      data: {
        data
      }
    } = await axios({
      url,
      method: 'POST',
      data: this.config.API_BODY,
      timeout: this.getTimeout()
    })
    return data
  }

  static async getPrice (url?: string): Promise<number> {
    const data = await this.getData(url || this.config.API_URL)
    const dataParsed = data
      .sort((a, b) => b.adv.price - a.adv.price)
      .slice(0, Math.floor(data.length / 2))
    const totalPrice = dataParsed.reduce((prev, curr) => {
      return +curr.adv.price + prev
    }, 0)
    return totalPrice / dataParsed.length
  }
}
