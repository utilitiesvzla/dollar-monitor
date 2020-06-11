# Dollar monitor
Average price in dollars for Venezuela

# Example
```ts
import { DolartodayService } from 'dollar-monitor'

(async () => {
  // Get dolartoday rate
  const rate = await DolartodayService.getPrice()
  console.log(rate)
})()
```
[More examples](https://github.com/Sansossio/dollar-monitor/tree/master/examples)