import { createSelector } from "@reduxjs/toolkit";
import { Product } from "../../common/models/Product";
import { RootState } from "../rootReducer";
import { catalogFilterByBrandSelector, catalogFilterByPriceSelector, catalogOrderBySelector } from "./filters.selector";


export const getProduct = createSelector(
  (state: RootState) => state.product.loading,
  (state: RootState) => state.product.product,
  (state: RootState) => state.product.error,
  (loading, product, error): {loading: boolean, product: any, error: boolean} => ({
      loading,
      product,
      error,
  }),
);

const catalogLoadingSelector = (state: RootState) => state.products.loading;
const catalogItemsSelector = (state: RootState) => state.products.items;
const catalogErrorSelector = (state: RootState) => state.products.error;

const catalogItemsFilterBy = createSelector(
  catalogItemsSelector,
  catalogFilterByBrandSelector,
  catalogFilterByPriceSelector,
  (items: Product[], filterByBrand: string[], filterByPrice: { min: number, max: number}) => {
      if (!items || items.length === 0) return [];

      return items.filter((item: Product) => {
          const matchBrand = filterByBrand.length !== 0 ? filterByBrand.includes(item.brand) : true;
          const matchPrice = item.price >= filterByPrice.min && item.price <= filterByPrice.max;

          return matchBrand && matchPrice;
      });
  },
);

const catalogItemsFilterByAndOrderBy = createSelector(
  catalogItemsFilterBy,
  catalogOrderBySelector,
  (items, orderBy) => {
      return items.sort((a: any, b: any) => {
          switch (orderBy) {
              case 'price-asc':
                  return a.price - b.price;
              case 'price-desc':
                  return b.price - a.price;
              default:
                  return b.createdAt - a.createdAt;
          }
      });
  },
);

export const getCatalog = createSelector(
  catalogLoadingSelector,
  catalogItemsFilterByAndOrderBy,
  catalogErrorSelector,
  (loading, products, error: any) => {
      const hasErrorMessage =
          !loading && !products.length && !error
              ? {
                    ...error,
                    name: 'Фильтр',
                    message: 'Упс! У нас нет таких товаров, попробуйте изменить условия поиска.',
                }
              : error;

      return {
          loading,
          products,
          error: hasErrorMessage,
      };
  },
);

export const getProductsLength = (state: RootState) => state.products.items.length;