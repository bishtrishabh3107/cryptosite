import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Global/Layout"
import ReactMarkdown from "react-markdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  query ($stepuid: String!) {
    allStrapiCoinInvestStep(filter: { uid: { in: [$stepuid] } }) {
      edges {
        node {
          id
          headline
          uid
          link1
          step1
          step2
          step3
          step4
          step5
          keywords
          Image1 {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
          Image2 {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
          Image3 {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
          Image4 {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
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
    strapiCoinInvestStep(uid: { in: [$stepuid] }) {
      headline
      step1
      keywords
      image1 {
        url
      }
    }
  }
`

const StepTemplate = ({ data }) => {
  const CoinInvestStep = data.strapiCoinInvestStep
  var str = CoinInvestStep.keywords
  var temp = new Array()
  temp = str.split(",")
  const seo = {
    metaTitle: CoinInvestStep.headline,
    metaDescription: CoinInvestStep.step1,
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
    shareImage: CoinInvestStep.image1.url,
  }

  return (
    <Layout seo={seo}>
      <div className="flex flex-col">
        <div className="-mt-20 px-2 mb-10">
          {data.allStrapiCoinInvestStep.edges.map(({ node }) => (
            <div key={node.id} className="mt-20">
              <h1 className="font-bold uppercase text-2xl my-2">
                {node.headline} !
              </h1>
              <div className="mb-5 font-semibold text-xs text-yellow-600">
                CLICK ON THIS LINK &#8594; {"  "}
                <a
                  href={node.link1}
                  className="text-blue-700 text-xs lg:text-sm xl:text-sm xxl:xl hover:text-blue-500"
                  target="_blank"
                >
                  {node.link1}
                </a>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mb-5">
                <div className="p-4">
                  <GatsbyImage
                    image={getImage(
                      node.Image1.childImageSharp.gatsbyImageData
                    )}
                    alt={node.headline}
                  />
                </div>
                <h1 className="font-semibold text-left sm:p-4 md:p-8 lg:p-8 xl:p-8 2xl:p-12">
                  <ReactMarkdown>{node.step1}</ReactMarkdown>
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mb-5">
                <h1 className="font-semibold text-left sm:p-4 md:p-8 lg:p-8 xl:p-8 2xl:p-12">
                  <ReactMarkdown>{node.step2}</ReactMarkdown>
                </h1>
                <div className="p-4">
                  <GatsbyImage
                    image={getImage(
                      node.Image2.childImageSharp.gatsbyImageData
                    )}
                    alt={node.headline}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mb-5">
                <div className="p-4">
                  <GatsbyImage
                    image={getImage(
                      node.Image3.childImageSharp.gatsbyImageData
                    )}
                    alt={node.headline}
                  />
                </div>
                <h1 className="font-semibold text-left sm:p-4 md:p-8 lg:p-8 xl:p-8 2xl:p-12">
                  <ReactMarkdown>{node.step3}</ReactMarkdown>
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mb-5">
                <h1 className="font-semibold text-left sm:p-4 md:p-8 lg:p-8 xl:p-8 2xl:p-12">
                  <ReactMarkdown>{node.step4}</ReactMarkdown>
                </h1>
                <div className="p-4">
                  <GatsbyImage
                    image={getImage(
                      node.Image4.childImageSharp.gatsbyImageData
                    )}
                    alt={node.headline}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mb-5">
                <div className="p-4">
                  <GatsbyImage
                    image={getImage(
                      node.Image5.childImageSharp.gatsbyImageData
                    )}
                    alt={node.headline}
                  />
                </div>
                <h1 className="font-semibold text-left sm:p-4 md:p-8 lg:p-8 xl:p-8 2xl:p-12">
                  <ReactMarkdown>{node.step5}</ReactMarkdown>
                </h1>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-2"></hr>
      </div>
    </Layout>
  )
}

export default StepTemplate
