import { connect } from "react-redux"
import { compose } from "redux"
import { createStructuredSelector } from "reselect"
import WithSpinner from "../../components/withSpinner/withSpinner"
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector"
import CollectionPage from "./Collection"
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
})

const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage)

export default CollectionPageContainer
