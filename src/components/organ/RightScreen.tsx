import React, { useState, useEffect } from "react"
import { ImFire } from "react-icons/im"
import TopTenCard from "../atom/TopTenCard"
import { GiArrowCursor } from "react-icons/gi"
import { GiLobArrow } from "react-icons/gi"
import TopGainersCard from "../atom/TopGainersCard"
import axios from "axios"
import TopLosersCard from "../atom/TopLosersCard"
import LearnToInvest from "../atom/LearnToInvest"
import { graphql, Link, StaticQuery } from "gatsby"

function RightScreen() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=1000&page=1&sparkline=false"
      )
      .then(res => {
        setCoins(res.data)
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <div className="p-4">
        <TopGainersCard
          Icon={GiArrowCursor}
          title="TOP GAINERS"
          coins={coins}
        />
      </div>
      <div className="p-4">
        <TopLosersCard Icon={GiLobArrow} title="TOP LOSERS" coins={coins} />
      </div>
      <div className="p-4">
        <TopTenCard Icon={ImFire} title="Top 10 Coins" coins={coins} />
      </div>
      <StaticQuery
        query={LearnQuery}
        render={data => {
          return (
            <>
              <div className="">
                {data.allStrapiCoinInvestStep.edges.map(({ node }) => (
                  <div key={node.id} className="p-4">
                    <Link to={`/steps/${node.uid}`}>
                      <LearnToInvest
                        title={node.headline}
                        image={node.Image5.childImageSharp.gatsbyImageData}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )
        }}
      />
    </div>
  )
}

export default RightScreen

const LearnQuery = graphql`
  {
    allStrapiCoinInvestStep(
      filter: { learnOrEarn: { eq: "Learn" }, spotlight: { eq: true } }
    ) {
      edges {
        node {
          id
          headline
          uid
          Image5 {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`
