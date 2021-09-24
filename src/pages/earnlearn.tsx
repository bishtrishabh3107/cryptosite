import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Global/Layout"
import React from "react"
import LeftScreen from "../components/organ/LeftScreen"
import RightScreen from "../components/organ/RightScreen"

function earnlearn() {
  const data = useStaticQuery(query)

  return (
    <Layout seo={data.strapiCoinGlobal.seo}>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 p-2 -mt-8">
        <div className="flex flex-col">
          <h1 className="mb-4 text-lg text-gray-500 uppercase font-bold">
            Earn from crypto
          </h1>
          <LeftScreen />
        </div>
        <div className="flex flex-col">
          <h1 className="mb-4 text-lg text-gray-500 uppercase font-bold">
            Learn about crypto
          </h1>
          <RightScreen />
        </div>
      </div>
    </Layout>
  )
}

export default earnlearn

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
