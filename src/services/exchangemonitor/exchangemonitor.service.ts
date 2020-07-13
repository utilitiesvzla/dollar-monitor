import * as _ from 'lodash'
import { BaseService } from '../base/base.service'

export class ExchangemonitorService extends BaseService {
  static async getPrice () {
    const values: any[] = await super.getPrice() as any
    const valuesMapped = values.map(([date, value]) => ({
      value,
      date
    }))
    const { value } = _.maxBy(valuesMapped, 'date')
    return +value
  }
}