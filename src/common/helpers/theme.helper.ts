import { ThemeOptions } from "@mui/material";
import { themesMap, THEME_MODES, THEME_TYPES } from '../constants/themes';
import { ICustomPalette } from "../interfaces/palette.interface";
import { CustomTheme } from "../settings/themes";


export const getCustomTheme = (darkMode: boolean, themeType: string = THEME_TYPES.BASE, customPalette: ICustomPalette): ThemeOptions => {
  const themeMode = darkMode ? THEME_MODES.DARK: THEME_MODES.LIGHT;

  if (themeType === THEME_TYPES.CUSTOM) {
    return CustomTheme(themeMode, customPalette);
  }

  return themesMap[themeType](themeMode);
};
