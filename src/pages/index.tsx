import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Global/Layout"
import UpdateScreen from "../components/organ/UpdateScreen"
import React from "react"
import LeftScreen from "../components/organ/LeftScreen"
import RightScreen from "../components/organ/RightScreen"
import AllCoinScreen from "../components/organ/AllCoinScreen"
import { AiOutlineStock } from "react-icons/ai"
// import CoinCompareChart from "../components/atom/CoinCompareChart"

function index() {
  const data = useStaticQuery(query)

  return (
    <Layout seo={data.strapiCoinGlobal.seo}>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-7 xl:grid-cols-7 2xl:grid-cols-7 gap-8 p-2 -mt-8">
        <div className="lg:col-start-1 lg:col-end-3 xl:col-start-1 xl:col-end-3 2xl:col-start-1 2xl:col-end-3">
          <LeftScreen />
        </div>
        <div className="lg:col-start-3 lg:col-end-6 xl:col-start-3 xl:col-end-6 2xl:col-start-3 2xl:col-end-6 -mt-4">
          <div className="flex flex-row justify-center">
            <h1 className="mb-6 font-bold text-gray-400 mr-1">
              Daily Updates on Coins
            </h1>
            <div className="text-green-500 mt-1 text-lg">
              <AiOutlineStock />
            </div>
          </div>
          <UpdateScreen />
        </div>
        <div className="lg:col-start-6 lg:col-end-8 xl:col-start-6 xl:col-end-8 2xl:col-start-6 2xl:col-end-8">
          <RightScreen />
        </div>
      </div>
      <div className="my-10">
        <AllCoinScreen />
      </div>
    </Layout>
  )
}

export default index

const query = graphql`
  query {
    strapiCoinGlobal {
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          url
        }
      }
    }
  }
`
