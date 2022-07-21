import { put, call, delay } from 'redux-saga/effects';
import { fetchProductApi } from '../../../api';
import { getProductFailed, getProductSuccess } from '../../ducks/productSlice';


export function* fetchProduct(action: any): any {
  try {
      yield delay(2000);
      const { data } = yield call(fetchProductApi, action.payload);
      yield put(getProductSuccess(data));
  } catch (error: any) {
      yield put(getProductFailed(error));
  }
}