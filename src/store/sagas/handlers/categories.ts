import { put, call, delay } from 'redux-saga/effects';
import { fetchAllCategories } from '../../../api';
import { getCategoriesFailed, getCategoriesSuccess } from '../../ducks/categoriesSlice';


export function* fetchCategories(): any {
  try {
      yield delay(2000);
      const { data }  = yield call(fetchAllCategories);
      yield put(getCategoriesSuccess([...data, ...data, ...data, ...data]));
  } catch (error: any) {
      yield put(getCategoriesFailed(error));
  }
}