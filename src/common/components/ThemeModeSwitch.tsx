import { Box, IconButton } from '@mui/material';
import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useSelector } from 'react-redux';
import { toggleDarkMode, togglePopupOpened } from '../../store/ducks/settingsSlice';
import { useAppDispatch } from '../../store/hooks';
import { settingsDarkModeSelector } from '../../store/selectors/settings.selector';

const ThemeModeSwitch = () => {
  const dispatch = useAppDispatch();
  const darkMode = useSelector(settingsDarkModeSelector);

  return (
    <Box>
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => {
          dispatch(toggleDarkMode());
          dispatch(togglePopupOpened())
        }}
        color="inherit">
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        <p>{darkMode ? 'Dark' : 'Light' }</p>
      </IconButton>
    </Box >
  );
}

export default ThemeModeSwitch;


