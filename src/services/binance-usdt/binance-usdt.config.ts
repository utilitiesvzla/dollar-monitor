import { IBaseConfig } from '../base/base.config'

export const config: IBaseConfig & { API_BODY: any } = {
  API_URL: 'https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search',
  API_BODY: {
    page: 1,
    rows: 20,
    payTypes: [],
    asset: 'USDT',
    tradeType: 'BUY',
    fiat: 'VES',
    publisherType: null,
    merchantCheck: false
  }
}
