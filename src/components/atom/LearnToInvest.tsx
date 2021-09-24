import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../../assets/styles/index.scss"
import { Link } from "gatsby"

function LearnToInvest({ title, image }) {
  return (
    <div>
      <Link to="/earnlearn">
        <div>
          <div className="card rounded-lg shadow-xl">
            <div className="text-xs font-bold pl-4 mt-1 py-1 text-gray-500 border-b-2 border-yellow-400 uppercase hover:text-yellow-400">
              {title}
            </div>
            <div>
              <GatsbyImage image={getImage(image)} alt={title} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default LearnToInvest
