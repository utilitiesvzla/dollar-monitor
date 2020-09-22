import { config } from './localbitcoin.config'
import { BaseService } from '../base/base.service'
import * as _ from 'lodash'

const INFORMATION_KEYS = [
  'rates.last',
  'avg_1h',
  'avg_6h',
  'avg_12h',
  'avg_24h'
]

const MIN = 7.2
const MAX = 9.5

export class LocalBitcoinService extends BaseService {
  static config = config

  static async getPrice () {
    const data = await LocalBitcoinService.getData(config.API_URL)
    const {
      USD,
      VES
    } = data
    const allPrices: { key: string, price: number }[] = []
    const overPrice = this.getOverPrice(MIN, MAX)
    for (const key of INFORMATION_KEYS) {
      const price = (+(_.get(VES, key) || _.get(VES, 'avg_12h')) / +_.get(USD, key)) * overPrice
      if (price) {
        allPrices.push({
          key,
          price
        })
      }
    }
    return Math.max(...allPrices.map(({ price }) => price))
  }
}
