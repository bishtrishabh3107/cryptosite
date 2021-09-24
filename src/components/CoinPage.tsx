import React from "react"
import ReactMarkdown from "react-markdown"
import alasql from "alasql"
import CoinDetails from "./atom/CoinDetails"

function CoinPage({ coinName, coinSummary, coinID, coins }) {
  var data = coins
  var res = alasql(`SELECT * FROM ? WHERE name = "${coinName}"`, [data])
  // console.log(`SELECT * FROM ? WHERE name = "${coinName}"`)
  // console.log(res)
  return (
    <div className="mt-16 px-4">
      {res.map(coin => (
        <div className="flex flex-row justify-between" key={coinID}>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <h1 className="font-bold text-gray-500">
                #{coin.market_cap_rank}
                &nbsp; &nbsp;
              </h1>
              <h1 className="text-left font-bold"> {coin.name}</h1>
            </div>
          </div>
          <div>
            <CoinDetails coin={coin} />
          </div>
          <div className="h-28 w-28 mb-4 my-4">
            <img src={coin.image} alt={coin.name} />
          </div>
        </div>
      ))}

      <h1 className="text-left text-sm">
        <ReactMarkdown>{coinSummary}</ReactMarkdown>
      </h1>
    </div>
  )
}

export default CoinPage
