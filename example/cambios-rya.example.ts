import { CambiosRYAService } from '../src'

(async () => {
  // Get cambiosrya rate
  const rate = await CambiosRYAService.getPrice()
  console.log(rate)
})()
