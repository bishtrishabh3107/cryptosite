import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Global/Layout"
import React from "react"
import AllCoinScreen from "../components/organ/AllCoinScreen"

function allcoins() {
  const data = useStaticQuery(query)

  return (
    <Layout seo={data.strapiCoinGlobal.seo}>
      <div className="p-2 -mt-8">
        <AllCoinScreen />
      </div>
    </Layout>
  )
}

export default allcoins

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
