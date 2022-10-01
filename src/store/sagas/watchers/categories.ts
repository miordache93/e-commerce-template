import { takeLatest } from "redux-saga/effects";
import { getCategories } from "../../ducks/categoriesSlice";
import { fetchCategories } from "../handlers/categories";

export function* categoriesWatcherSaga() {
  yield takeLatest(getCategories.type, fetchCategories);
}