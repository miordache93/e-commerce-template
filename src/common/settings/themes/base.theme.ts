import { PaletteMode, ThemeOptions } from "@mui/material";
import { IPalette } from "../../interfaces/palette.interface";

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    rounded: true;
  }
}

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
  palette: {
    ...palletes[mode].palette,
    mode
  },
  shape: {
    borderRadius: 4
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          // margin: 1
        }
      },
      variants: [
        {
          props: { variant: 'rounded' },
          style: {
            textTransform: 'none',
            textAlign: 'center',
            width: '100%',
            borderRadius: '15px',
            border: '1px solid transparent',
            '&:hover': {
              border: '1px solid black'
            }
          },
        },
      ]
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // background: "#393e46"
        }
      },
      defaultProps: {
        elevation: 0
      }
    }
  }
});

