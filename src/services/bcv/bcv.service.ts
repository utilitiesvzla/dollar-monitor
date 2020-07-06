import { config } from './bcv.config'
import { BaseService } from '../base/base.service'
import { JSDOM } from 'jsdom'

export class BcvService extends BaseService {
  private static parseValue (value: string) {
    return +value
      .replace('.', '')
      .replace(',', '.')
  }

  static async getPrice () {
    const websiteData = await this.getData(config.API_URL)
    const html = new JSDOM(websiteData)
    const elements = html
      .window
      .document
      .getElementById('dolar')
      .getElementsByClassName('col-xs-6')
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i]
      const value = element.textContent.trim()
      if (/\d+.\d+,\d+/g.test(value)) {
        return this.parseValue(value)
      }
    }
    return 0
  }
}
