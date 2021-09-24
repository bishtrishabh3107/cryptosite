import React from "react"
import "../../assets/styles/index.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"

function UpdatesCard({ update, date, image }) {
  return (
    <div>
      <div className="grid grid-cols-10 mb-4">
        <div className="mr-2 col-span-2">
          <GatsbyImage image={getImage(image)} alt={update} />
        </div>
        <div className="flex flex-col col-span-8">
          <h1 className="text-left text-xs font-medium">
            <ReactMarkdown>{update}</ReactMarkdown>
          </h1>
          <div className="card-headline font-semibold text-right text-gray-500 pr-2">
            Published On: {date}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdatesCard
