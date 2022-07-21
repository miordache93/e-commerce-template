import { put, call, delay } from 'redux-saga/effects';
import { fetchProductsApi } from '../../../api';
import { getProductsFailed, getProductsSuccess } from '../../ducks/productsSlice';


export function* fetchProducts(): any {
  try {
      yield delay(2000);
      const { data } = yield call(fetchProductsApi);
      yield put(getProductsSuccess(data));
  } catch (error: any) {
      yield put(getProductsFailed(error));
  }
}