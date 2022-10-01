import { createSlice } from "@reduxjs/toolkit";

interface ISettingsState {
  language: string;
  themeType: string;
  darkMode: boolean;
  sideBarOpened: boolean;
  poupOpened: boolean;
  customPalette: {
    primary: string;
    secondary: string;
  }
};

const initialState: ISettingsState = {
  language: 'en',
  themeType: 'BASE',
  darkMode: false,
  sideBarOpened: false,
  poupOpened: false,
  customPalette: {
    primary: '#121212',
    secondary: '#ebb134'
  }
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
    togglePopupOpened: (state): any => {
      return {
        ...state,
        poupOpened: !state.poupOpened
      }
    },
    setThemeType: (state, action): any => {
      return {
        ...state,
        themeType: action.payload
      }
    },
    setCustomPalette: (state, action): any => {
      return {
        ...state,
        customPalette: {
          ...state.customPalette,
          primary: action.payload.primary,
          secondary: action.payload.secondary
        }
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

export const { toggleDarkMode, setThemeType, setLanguage, toogleSideBar, togglePopupOpened, setCustomPalette } = settingsSlice.actions;

export default settingsSlice.reducer;