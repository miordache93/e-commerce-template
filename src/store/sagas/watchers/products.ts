import { takeLatest } from "redux-saga/effects";
import { getProducts } from "../../ducks/productsSlice";
import { fetchProducts } from "../handlers/products";


export function* productsWatcherSaga() {
  yield takeLatest(getProducts.type, fetchProducts);
}