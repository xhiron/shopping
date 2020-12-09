import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectCollectionsPreview } from "../../redux/shop/shop.selector"
import PreviewCollection from "../preview-collection/PreviewCollection"
import "./CollectionsOverview.scss"

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
)
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
