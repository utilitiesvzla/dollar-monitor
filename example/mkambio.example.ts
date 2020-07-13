import { MkambioService } from '../src'

(async () => {
  // Get mkambio rate
  const rate = await MkambioService.getPrice()
  console.log(rate)
})()
