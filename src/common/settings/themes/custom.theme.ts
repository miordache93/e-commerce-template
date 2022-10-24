import { PaletteMode, ThemeOptions } from "@mui/material";
import { IPalette } from "../../interfaces/palette.interface";

export const CustomTheme = (mode: PaletteMode, palette: any): ThemeOptions => {
    const palletes: { [key: string]: IPalette } = {
        light: {
            palette: {
                mode: mode,
                primary: {
                    main: palette.primary,
                },
                secondary: {
                    main: palette.secondary,
                }
            },
        },
        dark: {
            palette: {
                mode: mode,
                primary: {
                    main: palette.primary,
                },
                secondary: {
                    main: palette.secondary,
                }
            },
        },
    };

    return palletes[mode];
};