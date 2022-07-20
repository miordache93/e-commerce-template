import { all, fork } from 'redux-saga/effects';
import { productsWatcherSaga } from './watchers/products';

function* rootSaga() {
  // TODO: add more sagas
  yield all([fork(productsWatcherSaga)]);
}

export default rootSaga;