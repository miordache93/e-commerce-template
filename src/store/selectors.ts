import { RootState } from "./rootReducer";

export const getProductsLength = (state: RootState) => state.products.items.length;
