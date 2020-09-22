import { config } from './localbitcoin.config'
import { BaseService } from '../base/base.service'
import { JSDOM } from 'jsdom'
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

  private static parseValue (val: string) {
    return +val
      .replace(/\$/g, '')
      .replace(/,/g, '')
      .replace('VES', '')
      .trim()
  }

  private static async getBtcPrice () {
    const websiteData = await this.getData(config.BTC_URL)
    const html = new JSDOM(websiteData)

    const price = html
      .window
      .document
      .getElementsByClassName('cmc-details-panel-price__price')[0]
      .textContent
    return this.parseValue(price) || 0
  }

  private static async getValues () {
    const websiteData = await this.getData(config.API_URL)

    const html = new JSDOM(websiteData)
    const elements = html
      .window
      .document
      .getElementsByClassName('column-price')
    const prices: number[] = []
    for (const element of elements) {
      const value = this.parseValue(element.textContent)
      prices.push(value)
    }
    return prices
  }

  static async getPrice () {
    const values = await this.getValues()
    const btcValue = await this.getBtcPrice()
    const average = values.reduce((prev, curr) => prev + curr, 0) / values.length
    return average / btcValue
  }
}
