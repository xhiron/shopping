import { connect } from "react-redux"
import { compose } from "redux"
import { createStructuredSelector } from "reselect"
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector"
import WithSpinner from "../withSpinner/withSpinner"
import CollectionsOverview from "./CollectionsOverview"
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
})

const CollectionsOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionsOverview)

export default CollectionsOverviewContainer
