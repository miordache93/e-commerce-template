import { RootState } from "../rootReducer";

export const settingsThemeTypeSelector = (state: RootState) => state.settings.themeType;
export const settingsCustomPaletteSelector = (state: RootState) => state.settings.customPalette;
export const settingsDarkModeSelector = (state: RootState) => state.settings.darkMode;
export const settingsLanguageSelector = (state: RootState) => state.settings.language;
export const settingsSideBarOpenedSelector = (state: RootState) => state.settings.sideBarOpened;
export const settingsPopupOpenedSelector = (state: RootState) => state.settings.poupOpened;

