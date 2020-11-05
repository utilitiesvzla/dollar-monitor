import { config } from './localbitcoin.config'
import { BaseService } from '../base/base.service'
import { JSDOM } from 'jsdom'
import * as _ from 'lodash'
import { DolartodayLocalbitcoinService } from '../dolartoday-localbitcoins/dolartoday-localbitcoins.service'

const MAX_WEB = 10
const MAX_API = 30

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
    if (prices.length > MAX_WEB) {
      return prices.sort(price => -price).slice(0, MAX_WEB - 1)
    }
    return prices
  }

  private static async getPricesFromWeb (btcValue: number) {
    try {
      const values = await this.getValues()
      const average = values.reduce((prev, curr) => prev + curr, 0) / values.length
      return (average / btcValue)
    } catch (e) {
      console.error('localbitcoin getPricesFromWeb', e)
      return 0
    }
  }

  private static async getPriceFromApi (btcValue) {
    try {
      const {
        data: {
          ad_list = []
        } = {} as any
      } = await BaseService.getData(config.API_API_URL)
      let prices = ad_list
        .map(({ data }) => data)
        .sort((a, b) =>
          new Date(b.created_at).getTime() -
          new Date(a.created_at).getTime()
        )
      prices = prices.map(({ temp_price }) => +temp_price)
      if (prices.length > MAX_API) {
        prices = prices.sort(price => -price).slice(0, MAX_API - 1)
      }
      const sum = prices.reduce((prev, curr) => prev + curr, 0) / prices.length
      return sum / btcValue
    } catch (e) {
      console.error('localbitcoin getPriceFromApi', e)
      return 0
    }
  }

  static async getPrice (): Promise<number> {
    const btcPrice = await this.getBtcPrice()
    return await LocalBitcoinService.getPriceFromApi(btcPrice) || await LocalBitcoinService.getPricesFromWeb(btcPrice) || DolartodayLocalbitcoinService.getPrice()
  }
}
