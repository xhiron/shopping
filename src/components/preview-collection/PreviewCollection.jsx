import React from "react"
import "./PreviewCollection.scss"
import CollectionItem from "../../components/collection-item/CollectionItem"

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps} />
        ))}
    </div>
  </div>
)

export default PreviewCollection
