import { ThemeOptions } from "@mui/material";
import { IPalette } from "../../interfaces/palette.interface";

export const CustomTheme = (mode: string, palette: any): ThemeOptions => {
    const palletes: { [key: string]: IPalette } = {
        light: {
            palette: {
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