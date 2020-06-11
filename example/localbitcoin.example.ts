import { LocalBitcoinService } from '../src'

(async () => {
  // Get localbitcoin rate
  const rate = await LocalBitcoinService.getPrice()
  console.log(rate)
})()
