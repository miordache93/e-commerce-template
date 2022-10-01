import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: false
};


// Redux Toolkit slice
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getCategories: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {
        ...state,
        loading: true
      };
    },
    getCategoriesSuccess: (state, action): any => {
      return {
        ...state,
        items: [
          ...state.items,
          ...action.payload
        ],
        loading: false,
      }
    },
    getCategoriesFailed: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true
      };
    },
    clearCategories: (state) => {
      return {
        ...state,
        items: []
      }
    }
  },
});

export const { getCategories, getCategoriesSuccess, getCategoriesFailed, clearCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;