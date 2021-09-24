import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import UpdatesCard from "../atom/UpdatesCard"
import "../../assets/styles/index.scss"

function UpdateScreen() {
  return (
    <div className="scrollbar overflow-y-scroll">
      <div>
        <StaticQuery
          query={UpdateScreenQuery}
          render={data => {
            return (
              <>
                <div className="">
                  {data.allStrapiCoinUpdates.edges.map(({ node }) => (
                    <div key={node.id}>
                      <Link to={`/coins/${node.about_coin.uid}`}>
                        <UpdatesCard
                          update={node.update}
                          date={node.date}
                          image={
                            node.UpdateImage.childImageSharp.gatsbyImageData
                          }
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
    </div>
  )
}

export default UpdateScreen

const UpdateScreenQuery = graphql`
  {
    allStrapiCoinUpdates(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          update
          date(formatString: "DD MM YYYY")
          UpdateImage {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
          about_coin {
            coinName
            uid
          }
        }
      }
    }
  }
`
