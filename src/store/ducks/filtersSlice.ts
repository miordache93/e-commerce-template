import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: null,
  priceRange: {
    min: 0,
    max: 9999
  },
  brands: ['Brand 1'],
  orderBy: 'date-desc',
};

// Redux Toolkit slice
export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrandFilter: (state, action): any => {
      return {
        ...state,
        brands: [...state.brands, ...action.payload],
      };
    },
    setPriceFilter: (state, action): any => {
      return {
        ...state,
        priceRange: {
          ...state.priceRange,
          min:  action.payload.min,
          max:  action.payload.max,
        }
      };
    },
    setOrderBy: (state, action) => {
      return { ...state, orderBy: action.payload };
    },
    clearAllFilters: (state) => {
      return {
        ...state,
       ...initialState
      }
    }
  },
});

export const { setBrandFilter, setPriceFilter, setOrderBy, clearAllFilters } = filtersSlice.actions;

export default filtersSlice.reducer;