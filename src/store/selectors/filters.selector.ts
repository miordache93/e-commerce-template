import { RootState } from "../rootReducer";

export const catalogOrderBySelector = (state: RootState) => state.filters.orderBy;
export const catalogFilterByBrandSelector = (state: RootState) => state.filters.brands;
export const catalogFilterByPriceSelector = (state: RootState) => state.filters.priceRange;