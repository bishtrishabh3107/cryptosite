import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Global/Layout"
import CoinPage from "../components/CoinPage"
import axios from "axios"
import LeftScreen from "../components/organ/LeftScreen"
import UpdatesCard from "../components/atom/UpdatesCard"
import RightScreen from "../components/organ/RightScreen"
import { AiOutlineStock } from "react-icons/ai"

export const query = graphql`
  query ($coinuid: String!) {
    allStrapiAboutCoin(filter: { uid: { in: [$coinuid] } }) {
      edges {
        node {
          uid
          coinName
          coinID
          coinSummary
          AboutCoinImage {
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
    allStrapiCoinUpdates(
      sort: { fields: date, order: DESC }
      filter: { about_coin: { uid: { in: [$coinuid] } } }
    ) {
      edges {
        node {
          id
          update
          date(formatString: "DD MM YYYY")
          UpdateImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    strapiAboutCoin(uid: { in: [$coinuid] }) {
      coinName
      keywords
      coinSummary
      image {
        url
      }
    }
  }
`

const CoinTemplate = ({ data }) => {
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

  const aboutCoin = data.strapiAboutCoin
  var str = aboutCoin.keywords
  var temp = new Array()
  temp = str.split(",")
  const seo = {
    metaTitle: aboutCoin.coinName,
    metaDescription: aboutCoin.coinSummary,
    keyword1: temp[0],
    keyword2: temp[1],
    keyword3: temp[2],
    keyword4: temp[3],
    keyword5: temp[4],
    keyword6: temp[5],
    keyword7: temp[6],
    keyword8: temp[7],
    keyword9: temp[8],
    keyword10: temp[9],
    keyword11: temp[10],
    keyword12: temp[11],
    keyword13: temp[12],
    keyword14: temp[13],
    keyword15: temp[14],
    shareImage: aboutCoin.image.url,
  }

  return (
    <Layout seo={seo}>
      <div className="flex flex-col">
        <div className="-mt-20 px-2 mb-10">
          {data.allStrapiAboutCoin.edges.map(({ node }) => (
            <div key={node.coinID}>
              <CoinPage
                coinName={node.coinName}
                coinSummary={node.coinSummary}
                coinID={node.coinID}
                coins={coins}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-7 xl:grid-cols-7 2xl:grid-cols-7 gap-6 py-2 mt-14">
          <div className="lg:col-start-1 lg:col-end-3 xl:col-start-1 xl:col-end-3 2xl:col-start-1 2xl:col-end-3">
            <LeftScreen />
          </div>
          <div className="lg:col-start-3 lg:col-end-6 xl:col-start-3 xl:col-end-6 2xl:col-start-3 2xl:col-end-6 lg:-mt-8 xl:-mt-8 2xl:-mt-8">
            <div className="flex flex-row justify-center mb-4">
              <h1 className="mb-2 font-bold text-gray-400 mr-1">
                Daily Updates on This Coins
              </h1>
              <div className="text-green-500 mt-1 text-lg">
                <AiOutlineStock />
              </div>
            </div>
            <div className="scrollbar overflow-y-scroll">
              <div className="">
                {data.allStrapiCoinUpdates.edges.map(({ node }) => (
                  <div key={node.id}>
                    <UpdatesCard
                      update={node.update}
                      date={node.date}
                      image={node.UpdateImage.childImageSharp.gatsbyImageData}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-start-6 lg:col-end-8 xl:col-start-6 xl:col-end-8 2xl:col-start-6 2xl:col-end-8">
            <RightScreen />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CoinTemplate
