import { AKBfintechService } from '../src'

(async () => {
  // Get akbfintech rate
  const rate = await AKBfintechService.getPrice()
  console.log(rate)
})()
