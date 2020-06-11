import { config } from './the-airtm.config'
import { BaseService } from '../base/base.service'
import { JSDOM } from 'jsdom'

export class TheAirTMService extends BaseService {
  private static async getToday () {
    const websiteData = await this.getData(config.INFO_URL)
    const html = new JSDOM(websiteData)
    const element = html.window.document.getElementById('last_time')
    return (element as any).defaultValue
  }

  static async getPrice () {
    const d = await TheAirTMService.getToday()
    const data = await this.getData(config.API_URL, { d })
    return data.today.VES_BANK.buy as number
  }
}
