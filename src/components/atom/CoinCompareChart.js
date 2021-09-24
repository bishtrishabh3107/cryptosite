import React from "react"
import Helmet from "react-helmet"
import * as CryptoCharts from "cryptocharts"

function CoinCompareChart() {
  CryptoCharts.roiComparison({
    chart_id: "mychart",
    cryptocompare_tickers: ["BTC", "ETH"],
    iconomi_tickers: ["BLX", "CAR"],
    last_days: 90,
    options: {
      colors: ["#88AA24", "#EF1273", "#122673", "#000000"],
      title: true,
      chart: {
        type: "line",
      },
    },
  })
  return (
    <div>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/cryptocharts" />
      </Helmet>
      <div id="mychart"></div>
    </div>
  )
}

export default CoinCompareChart
