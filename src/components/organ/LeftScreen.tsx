import React from "react"
import EarnCrypto from "../atom/EarnCrypto"
import { graphql, Link, StaticQuery } from "gatsby"

function LeftScreen() {
  return (
    <div>
      <StaticQuery
        query={EarnQuery}
        render={data => {
          return (
            <>
              <div className="">
                {data.allStrapiCoinInvestStep.edges.map(({ node }) => (
                  <div key={node.id} className="p-4">
                    <Link to={`/steps/${node.uid}`}>
                      <EarnCrypto
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

export default LeftScreen

const EarnQuery = graphql`
  {
    allStrapiCoinInvestStep(
      filter: { learnOrEarn: { eq: "Earn" }, spotlight: { eq: true } }
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
