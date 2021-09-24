import PropTypes from "prop-types"
import React from "react"
import "../../assets/styles/index.scss"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import TopHeadline from "../atom/topheadline"
import CryptoIcon from "../atom/CryptoIcon"
// import { ToogleMenu } from "../atom/ToogleMenu/ToogleMenu"

function Header() {
  return (
    <div className="fixed top-0">
      <TopHeadline />
      <div className="">
        <div>{/* <ToogleMenu /> */}</div>
        <div className="fixed top-11 right-3 z-50 lg:top-10 xl:top-11 xxl:top-12">
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <div>
                <DarkModeSwitch
                  checked={theme === "dark" ? true : false}
                  onChange={() =>
                    theme === "dark"
                      ? toggleTheme("light")
                      : toggleTheme("dark")
                  }
                  size={24}
                />
              </div>
            )}
          </ThemeToggler>
        </div>
        <div className="">
          <CryptoIcon />
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
