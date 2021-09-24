import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Seo from "./seo"
import Header from "../organ/Header"
import Footer from "../organ/Footer"
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"

const Layout = ({ children, seo }) => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => (
        <div className="text-main-text text-center transition-all duration-500 min-h-screen px-2 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <Seo seo={seo} />

          <div className="mb-24">
            <Header />
          </div>
          <div className="py-6">
            <main>{children}</main>
          </div>

          <Footer />
          <div className="">
            <ScrollUpButton
              StopPosition={0}
              ShowAtPosition={150}
              EasingType="easeOutCubic"
              AnimationDuration={1500}
              ContainerClassName="ScrollUpButton__Container"
              TransitionClassName="ScrollUpButton__Toggled"
              style={{}}
              ToggledStyle={{}}
            />
          </div>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
