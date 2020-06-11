import { TheAirTMService } from '../src'

(async () => {
  // Get airtm rate
  const rate = await TheAirTMService.getPrice()
  console.log(rate)
})()
