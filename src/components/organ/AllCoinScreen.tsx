import React, { useState, useEffect } from "react"
import axios from "axios"
import AllCoinDetail from "../atom/AllCoinDetail"

function AllCoinScreen() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then(res => {
        setCoins(res.data)
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <AllCoinDetail coins={coins} />
    </div>
  )
}

export default AllCoinScreen
