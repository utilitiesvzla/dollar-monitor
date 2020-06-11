import { getAverage } from '../src'

(async () => {
  // Get average dollar rate
  const average = await getAverage()
  console.log(average)
})()
