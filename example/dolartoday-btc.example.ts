import { DolartodayBtcService } from '../src'

(async () => {
  // Get dolartoday bitcoin rate
  const rate = await DolartodayBtcService.getPrice()
  console.log(rate)
})()
