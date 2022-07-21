import { createSlice } from "@reduxjs/toolkit";

// This slice refers to the selectedProduct

const initialState = {
  product: null,
  selectedProductId: null,
  loading: false,
  error: false
};


// Redux Toolkit slice
export const productSlice = createSlice({
  name: 'product',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getProduct: (state, action): any => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {
        ...state,
        selectedProductId: action.payload,
        loading: true
      };
    },
    getProductSuccess: (state, action): any => {
      return {
        ...state,
        product: action.payload,
        loading: false,
      }
    },
    getProductFailed: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true
      };
    },
    clearSelectedProducts: (state) => {
      return {
        ...state,
        items: [],
      }
    }
  },
});

export const { getProduct, getProductSuccess, getProductFailed, clearSelectedProducts } = productSlice.actions;

export default productSlice.reducer;