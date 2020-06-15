import { BcvService } from '../src'

(async () => {
  // Get yadioio rate
  const rate = await BcvService.getPrice()
  console.log(rate)
})()
