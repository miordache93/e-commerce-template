import { PaletteMode, ThemeOptions } from "@mui/material";
import { IPalette } from "../../interfaces/palette.interface";

const palletes: { [key: string]: IPalette } = {
  light: {
    palette: {
      primary: {
        main: "#42a5f5",
      },
      secondary: {
        main: "#1976d2",
      }
    },
  },
  dark: {
    palette: {
      primary: {
        main: "#0d47a1",
      },
      secondary: {
        main: "#303f9f",
      }
    },
  },
};

export const baseTheme = (mode: PaletteMode): ThemeOptions => ({
  ...palletes[mode],
  shape: {
    borderRadius: 4
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#393e46"
        }
      },
      defaultProps: {
        elevation: 0
      }
    }
  }
});

