import { PetroService } from '../src'

(async () => {
  // Get petro rate
  const rate = await PetroService.getPrice()
  console.log(rate)
})()
