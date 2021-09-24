import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../../assets/styles/index.scss"

function EarnCrypto({ title, image }) {
  return (
    <div>
      <div>
        <div className="card rounded-lg shadow-xl">
          <div className="text-xs font-bold pl-4 mt-1 p-1 text-gray-500 border-b-2 border-green-400 uppercase hover:text-blue-400">
            {title}
          </div>
          <div>
            <GatsbyImage image={getImage(image)} alt={title} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarnCrypto
