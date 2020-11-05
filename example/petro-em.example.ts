import { PetroEmService } from '../src'

(async () => {
  // Get petro (exchange monitor) rate
  const rate = await PetroEmService.getPrice()
  console.log(rate)
})()
