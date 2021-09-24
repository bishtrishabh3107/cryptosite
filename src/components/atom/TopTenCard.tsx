import React from "react"
import alasql from "alasql"
import { AiFillCaretDown } from "react-icons/ai"
import { AiFillCaretUp } from "react-icons/ai"
import "../../assets/styles/index.scss"
import { Link } from "gatsby"

function TopTenCard({ Icon, title, coins }) {
  var data = coins
  var res = alasql("SELECT TOP 10 * FROM ? ORDER BY market_cap_rank ASC", [
    data,
  ])
  return (
    <div>
      <Link to="/allcoins/">
        <div className="card rounded-lg shadow-xl">
          <div className="flex flex-row justify-center">
            <Icon className="text-yellow-500 m-0.5 text-xl" />
            <div className="text-gray-600 font-bold ml-2 text-sm">{title}</div>
          </div>
          <div className="card-headline grid grid-cols-7 gap-3 font-bold pl-4 mt-2 pb-2 mb-1 text-gray-500 border-b-2 border-gray-200">
            <div className="col-span-2 text-left">Coin Name</div>
            <div className="col-span-3 text-left col-span-2">Market Cap</div>
            <div className="col-span-2 text-left">Today's Price</div>
          </div>
          <div className="divide-y divide-gray-200">
            {res.map(coin => (
              <div key={coin.market_cap_rank}>
                <div className="card-headline grid grid-cols-7 gap-3 font-semibold pl-2 mb-1 pt-1">
                  <div className="flex flex-row col-span-2">
                    <div className="h-5 w-5 mx-1 mt-1">
                      <img src={coin.image} alt={coin.name} />
                    </div>
                    <div className="flex flex-col mx-1 text-left">
                      <h1 className="font-bold">{coin.name}</h1>
                      <h1 className="font-semibold">{coin.symbol}</h1>
                    </div>
                  </div>
                  <div className="mx-1 col-span-3">
                    <h1 className="font-bold text-left">₹ {coin.market_cap}</h1>
                  </div>
                  <div className="ml-4 flex flex-col text-left col-span-2">
                    <h1 className="font-bold">
                      ₹ {coin.current_price.toFixed(0)}
                    </h1>
                    <div className="font-semibold">
                      {coin.price_change_percentage_24h < 0 ? (
                        <div className="text-red-600 flex flex-row">
                          <div className="mt-1 mr-1">
                            <AiFillCaretDown />{" "}
                          </div>
                          <div>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                          </div>
                        </div>
                      ) : (
                        <div className="text-green-600 flex flex-row">
                          <div className="mt-1 mr-1">
                            <AiFillCaretUp />{" "}
                          </div>
                          <div>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TopTenCard
