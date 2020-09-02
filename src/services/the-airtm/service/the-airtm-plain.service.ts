import { config } from '../the-airtm.plain-config'
import { BaseService } from '../../base/base.service'
import { JSDOM } from 'jsdom'

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
    return data.today?.VES_BANK?.buy || data.yesterday?.VES_BANK?.buy
  }
}
