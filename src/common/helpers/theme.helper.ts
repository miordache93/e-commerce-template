import { ThemeOptions } from "@mui/material";
import { themesMap } from '../constants/themes';


export const getCustomTheme = (darkMode: boolean, themeType: string = 'BASE'): ThemeOptions => {
  const themeMode = darkMode ? 'dark': 'light';

  return themesMap[themeType](themeMode);
};

