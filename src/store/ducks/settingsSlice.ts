import { createSlice } from "@reduxjs/toolkit";

interface ISettingsState {
  language: string;
  themeType: string;
  darkMode: boolean;
  sideBarOpened: boolean;
};

const initialState: ISettingsState = {
  language: 'en',
  themeType: 'BASE', // TODO: create a default theme
  darkMode: false,
  sideBarOpened: false
};

// Redux Toolkit slice for app settings
export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleDarkMode: (state): any => {
      return {
        ...state,
        darkMode: !state.darkMode
      }
    },
    setThemeType: (state, action): any => {
      return {
        ...state,
        themeType: action.payload
      }
    },
    setLanguage: (state, action): any => {
      return {
        ...state,
        language: action.payload
      }
    },
    toogleSideBar: (state): any => {
      return {
        ...state,
        sideBarOpened: !state.sideBarOpened
      }
    },
  }
});

export const { toggleDarkMode, setThemeType, setLanguage, toogleSideBar } = settingsSlice.actions;

export default settingsSlice.reducer;