import { PaxfulService } from '../src'

(async () => {
  // Get paxful rate
  const rate = await PaxfulService.getPrice()
  console.log(rate)
})()
