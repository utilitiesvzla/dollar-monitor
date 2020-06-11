# Dollar monitor
Average price in dollars for Venezuela

# Source methods available
- [x] `DolarToday (https://dolartoday.com)`
- [x] `BolivarCucuta (http://bolivarcucuta.com)`
- [x] `YadioIO (https://yadio.io)`
- [x] `The Airtm (https://rates.airtm.com)`

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
