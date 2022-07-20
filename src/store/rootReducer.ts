import { combineReducers } from 'redux';
import productsReducer from './ducks/productsSlice'

const rootReducer = combineReducers({
    products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

