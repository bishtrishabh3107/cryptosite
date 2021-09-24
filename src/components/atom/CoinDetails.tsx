import React from "react"
import "../../assets/styles/index.scss"
import { AiFillCaretDown } from "react-icons/ai"
import { AiFillCaretUp } from "react-icons/ai"

function CoinDetails({ coin }) {
  return (
    <div>
      <div className="card rounded-lg shadow-xl my-4">
        <div className="cardDetail-headline py-2 px-2">
          <div className="flex flex-row justify-between font-bold">
            <h1 className="mt-1">Coin Rank</h1>
            <div className="text-gray-500 ml-4 text-sm">
              #{coin.market_cap_rank}
            </div>
          </div>
          <div className="flex flex-row justify-between font-bold">
            <h1>Current Price</h1>
            <div className="text-gray-500 ml-4">₹ {coin.current_price}</div>
          </div>
          <div className="flex flex-row justify-between font-bold">
            <h1>Market Cap</h1>
            <div className="text-yellow-400 ml-8">₹ {coin.market_cap}</div>
          </div>
          <div className="flex flex-row justify-between font-bold">
            <h1>Today's High</h1>
            <div className="text-green-600 ml-4">₹ {coin.high_24h}</div>
          </div>
          <div className="flex flex-row justify-between font-bold">
            <h1>Today's Low</h1>
            <div className="text-red-600 ml-4">₹ {coin.low_24h}</div>
          </div>
          <div className="flex flex-row justify-evenly font-bold mt-1 text-xs">
            <h1>24 Hrs Change</h1>
            {coin.price_change_percentage_24h < 0 ? (
              <div className="text-red-600 flex flex-row">
                <div className="mt-1 mr-1">
                  <AiFillCaretDown />{" "}
                </div>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            ) : (
              <div className="text-green-600 flex flex-row">
                <div className="mt-1 mr-1">
                  <AiFillCaretUp />{" "}
                </div>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinDetails
