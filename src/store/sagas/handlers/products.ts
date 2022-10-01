import { put, call, delay } from 'redux-saga/effects';
import { getProductsFailed, getProductsSuccess } from '../../ducks/productsSlice';
import { fetchAllProducts } from '../../../api';


export function* fetchProducts(): any {
  try {
      yield delay(2000);
      const {data}  = yield call(fetchAllProducts);
      yield put(getProductsSuccess(data));
  } catch (error: any) {
      yield put(getProductsFailed(error));
  }
}