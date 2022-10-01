import { createSlice } from "@reduxjs/toolkit";

interface IFiltersState {
  searchText: string;
  priceRange: {
    min: number;
    max: number;
  },
  categories: string[];
  orderBy: string;
}

const initialState: IFiltersState = {
  searchText: '',
  priceRange: {
    min: 0,
    max: 9999
  },
  categories: [],
  orderBy: 'date-desc',
};

// Redux Toolkit slice
export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryFilter: (state, action): any => {
      return {
        ...state,
        categories: [...state.categories, ...action.payload],
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

export const { setCategoryFilter, setPriceFilter, setOrderBy, clearAllFilters } = filtersSlice.actions;

export default filtersSlice.reducer;