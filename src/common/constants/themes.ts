import { baseTheme, gambitsTheme, wildTheme } from "../settings/themes";

export const THEME_TYPES = {
  GAMBITS: 'GAMBITS',
  WILD: 'WILD',
  BASE: 'BASE'
};

export const themesMap: { [key: string ]: any } = {
  GAMBITS: gambitsTheme,
  WILD: wildTheme,
  BASE: baseTheme
};