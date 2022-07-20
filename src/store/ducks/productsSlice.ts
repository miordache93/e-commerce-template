import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: false
};


// Redux Toolkit slice
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getProducts: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {
        ...state,
        loading: true
      };
    },
    getProductsSuccess: (state, action): any => {
      return {
        ...state,
        items: [
          ...state.items,
          ...action.payload
        ],
        loading: false,
      }
    },
    getProductsFailed: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true
      };
    },
    clearProducts: (state) => {
      return {
        ...state,
        items: [],
      }
    }
  },
});

export const { getProducts, getProductsSuccess, getProductsFailed, clearProducts } = productsSlice.actions;

export default productsSlice.reducer;