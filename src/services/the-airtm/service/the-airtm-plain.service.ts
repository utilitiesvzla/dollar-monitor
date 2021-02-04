import { config } from '../the-airtm.plain-config'
import { BaseService } from '../../base/base.service'
import { JSDOM } from 'jsdom'
import * as _ from 'lodash'

export class TheAirTMServicePlain extends BaseService {
  private static async getToday () {
    const websiteData = await this.getData(config.INFO_URL)
    const html = new JSDOM(websiteData)
    const element = html.window.document.getElementById('last_time')
    return (element as any).defaultValue
  }

  static async getPrice () {
    const d = await this.getToday()
    const data = await this.getData(config.API_URL, { d })
    const keys = [
      'BANK',
      'CASH',
      'E-TRANSFER',
      'MOBILE'
    ]
    const days = ['today', 'yesterday']

    const values = {
      today: [],
      yesterday: []
    }

    for (const day of days) {
      for (const key of keys) {
        const value = _.get(data, `${day}.VES_${key}`)
        if (value) {
          values[day].push(value.sell, value.buy)
        }
      }
    }

    const response = values.today.length ? values.today : values.yesterday

    if (!response.length) {
      throw new Error('No values found')
    }

    return Math.max(...response)
  }
}
