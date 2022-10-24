import { PaletteMode } from "@mui/material";
import { baseTheme, gambitsTheme, wildTheme, CustomTheme } from "../settings/themes";

export const THEME_TYPES = {
  GAMBITS: 'GAMBITS',
  WILD: 'WILD',
  BASE: 'BASE',
  CUSTOM: 'CUSTOM',
};

export const THEME_MODES: { [key: string]: PaletteMode} = {
  DARK: 'dark',
  LIGHT: 'light',
}

export const themesMap: { [key: string ]: any } = {
  GAMBITS: gambitsTheme,
  WILD: wildTheme,
  BASE: baseTheme,
  CUSTOM: CustomTheme
};
