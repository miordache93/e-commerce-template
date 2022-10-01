import { PaletteMode, ThemeOptions } from "@mui/material";
import { IPalette } from "../../interfaces/palette.interface";

const palletes: { [key: string]: IPalette } = {
  light: {
    palette: {
      primary: {
        main: "#b39ddb"
      },
      secondary: {
        main: "#9575cd"
      }
    },
  },
  dark: {
    palette: {
      primary: {
        main: "#4a148c"
      },
      secondary: {
        main: "#7012a1"
      }
    },
  },
};

export const gambitsTheme = (mode: PaletteMode): ThemeOptions => ({
  ...palletes[mode],
  components: {}
});

