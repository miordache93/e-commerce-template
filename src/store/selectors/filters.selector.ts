import { RootState } from "../rootReducer";

export const catalogOrderBySelector = (state: RootState) => state.filters.orderBy;
export const catalogFilterByCategorySelector = (state: RootState) => state.filters.categories;
export const catalogFilterByPriceSelector = (state: RootState) => state.filters.priceRange;
