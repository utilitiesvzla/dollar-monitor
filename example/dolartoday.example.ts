import { DolartodayService } from '../src'

(async () => {
  // Get dolartoday rate
  const rate = await DolartodayService.getPrice()
  console.log(rate)
})()
