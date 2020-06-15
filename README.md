# Dollar monitor
Average price in dollars for Venezuela

# Source methods available
- [x] `Get average rate from all sources`
- [x] `DolarToday (https://dolartoday.com)`
- [x] `DolarToday BTC (https://dolartoday.com)`
- [x] `BolivarCucuta (http://bolivarcucuta.com)`
- [x] `YadioIO (https://yadio.io)`
- [x] `The Airtm (https://rates.airtm.com)`
- [x] `Localbitcoin (https://localbitcoins.com)`
- [x] `BCV (http://bcv.org.ve)`
- [x] `Petro (https://www.petro.gob.ve)`

# Example
```ts
import { DolartodayService } from 'dollar-monitor'

(async () => {
  // Get dolartoday rate
  const rate = await DolartodayService.getPrice()
  console.log(rate)
})()
```
[More examples](https://github.com/dolarvzla/dollar-monitor/tree/master/example)
