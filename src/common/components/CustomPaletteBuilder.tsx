import React from 'react'
import { useSelector } from 'react-redux';
import { settingsCustomPaletteSelector, settingsDarkModeSelector } from '../../store/selectors/settings.selector';
import { ColorPicker, useColor } from "react-color-palette";
import { useAppDispatch } from '../../store/hooks';
import { setCustomPalette } from '../../store/ducks/settingsSlice';
import "react-color-palette/lib/css/styles.css";


export const CustomPaletteBuilder = ()  =>{
 const customPalette = useSelector(settingsCustomPaletteSelector);
 const darkMode = useSelector(settingsDarkModeSelector);
 const dispatch = useAppDispatch();

 const [primary, setPrimary] = useColor("hex", customPalette.primary);
 const [secondary, setSecondary] = useColor("hex", customPalette.secondary);

 const setPalette = () => {
    dispatch(setCustomPalette({
        primary: primary.hex,
        secondary: secondary.hex
    }));
 };

  return (
    <div className="CustomPaletteBuilder">
     <ColorPicker width={250} height={228} color={primary} onChange={setPrimary} onChangeComplete={setPalette} hideHSV hideRGB dark={darkMode} />
     <ColorPicker width={250} height={228} color={secondary} onChange={setSecondary} onChangeComplete={setPalette} hideHSV hideRGB dark={darkMode} />
    </div>
  )
};
