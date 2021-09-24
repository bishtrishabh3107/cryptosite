import React from "react"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import "../../assets/styles/index.scss"
import CryptoIcon from "../atom/CryptoIcon"
import { Link } from "gatsby"

function Footer() {
  return (
    <footer className="footer relative border-b-2 border-blue-700 pt-4">
      <div className="md:px-4 lg:px-4 xl:py-8 xxl:py-10">
        <div className="flex flex-row justify-center">
          <CryptoIcon />
        </div>
        <div className="my-8 md:mx-6 lg:mx-8 xl:mx-10 xxl:mx-12">
          <div className="justify-between flex flex-col md:flex-row lg:flex-row xl:flex-row xxl:flex-row justify-between">
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl xl:text-2xl xxl:4xl font-bold text-gray-600 uppercase mb-2">
                Hello CRYPTO LOVERS!
              </span>
              <span className="my-2">
                <Link
                  to="/"
                  className="font-semibold text-blue-700 text-sm lg:text-md xl:text-lg 2xl:xl hover:text-blue-500 uppercase"
                >
                  HOME
                </Link>
              </span>
              <span className="my-2">
                <div className="font-semibold cursor-pointer text-blue-700 text-sm lg:text-md xl:text-lg 2xl:xl hover:text-blue-500 uppercase">
                  <Link to="/earnlearn">LEARN BASIC CRYPTO</Link>
                </div>
              </span>
              <span className="my-2">
                <div className="font-semibold cursor-pointer text-blue-700 text-sm lg:text-md xl:text-lg 2xl:xl hover:text-blue-500 uppercase">
                  <Link to="/earnlearn">
                    EARNING METHODS USING CRYPTO COINS
                  </Link>
                </div>
              </span>
              <span className="my-2">
                <div className="font-semibold cursor-pointer text-blue-700 text-sm lg:text-md xl:text-lg 2xl:xl hover:text-blue-500 uppercase">
                  <Link to="/allcoins/">ALL COINS</Link>
                </div>
              </span>
            </div>

            <div className="flex flex-col content-center items-center">
              <span className="font-bold text-gray-600 uppercase mt-4 mb-2 text-lg lg:text-xl xl:text-2xl xxl:3xl">
                SOCIAL MEDIA
              </span>
              <span className="my-2">
                <a
                  href="https://gmail.com"
                  className="text-blue-700 text-md lg:text-xl xl:text-2xl xxl:3xl hover:text-blue-500"
                  target="_blank"
                >
                  <SiGmail className="twitter-icon" size="1em" />
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://facebook.com"
                  className="text-blue-700 text-md lg:text-xl xl:text-2xl xxl:3xl hover:text-blue-500"
                  target="_blank"
                >
                  <FaFacebook className="facebook-icon" size="1em" />
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://instagram.com"
                  className="text-blue-700 text-md lg:text-xl xl:text-2xl xxl:3xl hover:text-blue-500"
                  target="_blank"
                >
                  <FaInstagram className="instagram-icon" size="1em" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="text-center py-6">
            <p className="text-sm text-blue-700 font-bold mb-2">
              © 2021 by INDIANCOINHUSTLERS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
