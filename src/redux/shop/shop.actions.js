import { convertCollectionsSnapSotToMap, firestore } from "../../firebase/firebase.utils"
import { ShopActionTypes } from "./shop.types"

export const fetchCollectionsStart = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
  payload: collectionsMap,
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
})

export const fetchCollectionssFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
})

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections")
    dispatch(fetchCollectionsStart())
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapSotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap))
      })
      .catch((error) => dispatch(fetchCollectionssFailure(error.message)))
  }
}
