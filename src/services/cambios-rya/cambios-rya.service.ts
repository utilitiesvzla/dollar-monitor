import * as _ from 'lodash'
import { config } from './cambios-rya.config'
import { BaseService } from '../base/base.service'

export class CambiosRYAService extends BaseService {
  protected static config = config

  static async getPrice () {
    const values: any[] = await super.getPrice() as any
    const value = values[values.length - 1]
    return +value[1]
  }
}
