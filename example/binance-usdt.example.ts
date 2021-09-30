import { BinanceUsdtService } from '../src'

(async () => {
  // Get binance usdt rate
  const rate = await BinanceUsdtService.getPrice()
  console.log(rate)
})()
