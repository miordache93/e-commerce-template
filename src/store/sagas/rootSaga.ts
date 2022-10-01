import { all, fork } from 'redux-saga/effects';
import { categoriesWatcherSaga } from './watchers/categories';
import { productWatcherSaga } from './watchers/product';
import { productsWatcherSaga } from './watchers/products';

function* rootSaga() {
  yield all([
    fork(productsWatcherSaga),
    fork(productWatcherSaga),
    fork(categoriesWatcherSaga)
  ]);
}

export default rootSaga;