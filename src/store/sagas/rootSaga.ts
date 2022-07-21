import { all, fork } from 'redux-saga/effects';
import { productWatcherSaga } from './watchers/product';
import { productsWatcherSaga } from './watchers/products';

function* rootSaga() {
  // TODO: add more sagas
  yield all([fork(productsWatcherSaga), fork(productWatcherSaga)]);
}

export default rootSaga;