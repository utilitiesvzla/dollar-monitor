import { BolivarCucutaService } from '../src'

(async () => {
  // Get bolivarcucuta rate
  const rate = await BolivarCucutaService.getPrice()
  console.log(rate)
})()
