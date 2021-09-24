import React from "react"
import { BsSun } from "react-icons/bs"
import { FcMoneyTransfer } from "react-icons/fc"
import { GiCoins } from "react-icons/gi"
import { FcHome } from "react-icons/fc"
import "../../assets/styles/index.scss"
import { motion } from "framer-motion"
import { Link } from "gatsby"

function CryptoIcon() {
  return (
    <div>
      <Link to="/">
        <div className="h-8 flex flex-row justify-center px-2 fixed top-11 left-3 z-50">
          <span className="text-gray-500 mt-1 md:mt-0.5 lg:mt-1 text-lg mr-1 hover:text-yellow-500">
            <motion.div whileHover={{ scale: 1.4 }}>
              <BsSun />
            </motion.div>
          </span>
          <h1 className="font-bold hover:text-yellow-500">IndianCoinHustle</h1>
        </div>
      </Link>

      <Link to="/allcoins/">
        <div className="h-8 flex flex-row justify-center px-2 fixed top-16 right-10 z-50">
          <span className="text-gray-500 text-lg mr-1">
            <motion.div whileHover={{ scale: 1.4 }}>
              <GiCoins />
            </motion.div>
          </span>
          <h1 className="font-bold text-sm hover:text-gray-400">ALL COINS</h1>
        </div>
      </Link>
      <Link to="/earnlearn/">
        <div className="h-8 flex flex-row justify-center px-2 fixed top-20 right-10 z-50">
          <span className="text-gray-500 mt-1 md:mt-0.5 lg:mt-1 text-lg mr-1">
            <motion.div whileHover={{ scale: 1.4 }}>
              <FcMoneyTransfer />
            </motion.div>
          </span>
          <h1 className="font-bold text-sm hover:text-blue-400">
            EARN / LEARN
          </h1>
        </div>
      </Link>
      <Link to="/">
        <div className="h-8 px-2 fixed top-12 right-10 z-50">
          <span className="text-gray-500 mt-1 md:mt-0.5 lg:mt-1 text-lg mr-1">
            <motion.div whileHover={{ scale: 1.4 }}>
              <FcHome />
            </motion.div>
          </span>
        </div>
      </Link>
    </div>
  )
}

export default CryptoIcon
