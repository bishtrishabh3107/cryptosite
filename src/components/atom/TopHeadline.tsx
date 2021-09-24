import React, { useState, useEffect } from "react"
import axios from "axios"
import "../../assets/styles/index.scss"
import Marquee from "react-fast-marquee"
import { AiFillCaretDown } from "react-icons/ai"
import { AiFillCaretUp } from "react-icons/ai"

function TopHeadline() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then(res => {
        setCoins(res.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <div className="topheadline -ml-20 z-100">
        <Marquee speed={80} pauseOnHover={true} loop={100}>
          {coins.map(coin => (
            <div key={coin.market_cap_rank}>
              <div className="flex flex-row mx-4 py-0.5">
                <div className="h-5 w-5 mx-1 mt-2">
                  <img src={coin.image} alt={coin.name} />
                </div>
                <div className="flex flex-col mx-1">
                  <h1 className="text-xs font-bold">{coin.name}</h1>
                  <h1 className="text-xs font-semibold">{coin.symbol}</h1>
                </div>
                <div className="ml-4 flex flex-col">
                  <h1 className="text-xs font-bold">₹ {coin.current_price}</h1>
                  <div className="text-xs font-semibold ">
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
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default TopHeadline
