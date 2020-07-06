import { BcvService } from '../src'

(async () => {
  // Get bcv rate
  const rate = await BcvService.getPrice()
  console.log(rate)
})()
