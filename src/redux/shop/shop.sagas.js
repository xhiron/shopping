import { ShopActionTypes } from "./shop.types"
import { all, call, put, takeEvery } from "redux-saga/effects"
import { convertCollectionsSnapSotToMap, firestore } from "../../firebase/firebase.utils"
import { fetchCollectionssFailure, fetchCollectionsSuccess } from "./shop.actions"

export function* fetchCollectionsAsync() {
  yield console.log("I am fired")
  try {
    const collectionRef = firestore.collection("collections")
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapSotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    put(fetchCollectionssFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
