import { DolarCucutaService } from '../src'

(async () => {
  // Get dolar cucuta rate
  const rate = await DolarCucutaService.getPrice()
  console.log(rate)
})()
