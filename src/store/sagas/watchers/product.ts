import { takeLatest } from "redux-saga/effects";
import { getProduct } from "../../ducks/productSlice";
import { fetchProduct } from "../handlers/product";


export function* productWatcherSaga() {
  yield takeLatest(getProduct.type, fetchProduct);
}