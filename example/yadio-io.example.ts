import { YadioIOService } from '../src'

(async () => {
  // Get yadioio rate
  const rate = await YadioIOService.getPrice()
  console.log(rate)
})()
