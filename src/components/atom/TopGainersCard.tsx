import React from "react"
import alasql from "alasql"
import { AiFillCaretUp } from "react-icons/ai"
import "../../assets/styles/index.scss"
import { Link } from "gatsby"

function TopGainersCard({ Icon, title, coins }) {
  var data = coins
  var res = alasql(
    "SELECT TOP 4 * FROM ? ORDER BY price_change_percentage_24h DESC",
    [data]
  )
  return (
    <div>
      <Link to="/allcoins/">
        <div className="card rounded-lg shadow-xl">
          <div className="flex flex-row justify-center">
            <Icon className="text-green-500 m-0.5 text-xl" />
            <div className="text-gray-600 font-bold ml-2 text-sm">{title}</div>
          </div>
          <div className="card-headline grid grid-cols-4 font-bold pl-4 mt-1 pb-1 text-gray-500 border-b-2 border-gray-200">
            <div className="col-span-2 text-left">Coin Name</div>
            <div className="text-left">Current Price</div>
            <div className="text-left">Today's Loss</div>
          </div>
          <div className="pt-2">
            {res.map(coin => (
              <div key={coin.market_cap_rank}>
                <div className="card-headline grid grid-cols-4 font-semibold pl-1 mb-1 pb-1">
                  <div className="flex flex-row col-span-2">
                    <div className="h-5 w-5 mx-1">
                      <img src={coin.image} alt={coin.name} />
                    </div>
                    <h1 className="mt-0.5">{coin.name}</h1>
                  </div>
                  <div className="font-bold text-green-600 text-left">
                    ₹ {coin.current_price}
                  </div>
                  <div className="text-green-600 flex flex-row text-left">
                    <div className="mt-1 mr-1">
                      <AiFillCaretUp />
                    </div>
                    <div>{coin.price_change_percentage_24h.toFixed(2)}%</div>
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

export default TopGainersCard
