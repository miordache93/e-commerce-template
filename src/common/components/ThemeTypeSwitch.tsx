import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { setThemeType } from '../../store/ducks/settingsSlice';
import { useAppDispatch } from '../../store/hooks';
import { settingsThemeTypeSelector } from '../../store/selectors/settings.selector';
import { THEME_TYPES } from '../constants/themes';


const ThemeTypeSwitch = () => {
  const dispatch = useAppDispatch();
  const themeType = useSelector(settingsThemeTypeSelector);

  const handleThemeChange = (event: any): void => {
    const {
      target: { value },
    } = event;
    dispatch(setThemeType(value));
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Theme</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={themeType}
          label="Theme"
          color="primary"
          onChange={handleThemeChange}
        >
          <MenuItem color="secondary" value={THEME_TYPES.BASE}>Base</MenuItem>
          <MenuItem value={THEME_TYPES.GAMBITS}>Gambits</MenuItem>
          <MenuItem value={THEME_TYPES.WILD}>Wild</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default ThemeTypeSwitch

