import { PaletteMode, ThemeOptions } from "@mui/material";
import { IPalette } from "../../interfaces/palette.interface";

const palletes: { [key: string]: IPalette } = {
  light: {
    palette: {
      primary: {
        main: "#66bb6a"
      },
      secondary: {
        main: "#1de9b6"
      }
    },
  },
  dark: {
    palette: {
      primary: {
        main: "#1b5e20"
      },
      secondary: {
        main: "#004d40"
      }
    },
  },
};

export const wildTheme = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    ...palletes[mode].palette,
    mode
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1
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
            border: 'none',
            '&:hover': {
              border: '1px solid black'
            }
          },
        },
      ]
    },
  }
});
