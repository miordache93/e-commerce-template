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
            '&:hover': {
              border: '1px solid black'
            }
          },
        },
      ]
    },
  },
});

