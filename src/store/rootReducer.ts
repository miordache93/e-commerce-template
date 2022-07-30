import { combineReducers } from 'redux';
import productsReducer from './ducks/productsSlice';
import productReducer from './ducks/productSlice';
import filtersReducer from './ducks/filtersSlice';
import settingsReducer from './ducks/settingsSlice';

const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    filters: filtersReducer,
    settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

