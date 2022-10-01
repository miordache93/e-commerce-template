import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";


export const getCategoriesSelector = createSelector(
    (state: RootState) => state.categories.loading,
    (state: RootState) => state.categories.items,
    (state: RootState) => state.categories.error,
    (loading, categories, error): {loading: boolean, categories: any[], error: boolean} => ({
        loading,
        categories,
        error,
    }),
  );
  