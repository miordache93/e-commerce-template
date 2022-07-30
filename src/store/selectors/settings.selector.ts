import { RootState } from "../rootReducer";

export const settingsThemeTypeSelector = (state: RootState) => state.settings.themeType;
export const settingsDarkModeSelector = (state: RootState) => state.settings.darkMode;
export const settingsLanguageSelector = (state: RootState) => state.settings.language;
