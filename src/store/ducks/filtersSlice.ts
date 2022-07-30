import { createSlice } from "@reduxjs/toolkit";

interface IFiltersState {
  searchText: string;
  priceRange: {
    min: number;
    max: number;
  },
  brands: string[];
  orderBy: string;
}

const initialState: IFiltersState = {
  searchText: '',
  priceRange: {
    min: 0,
    max: 9999
  },
  brands: [],
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