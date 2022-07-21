import { combineReducers } from 'redux';
import productsReducer from './ducks/productsSlice'
import productReducer from './ducks/productSlice'

const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

