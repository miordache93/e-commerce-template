import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { setLanguage, togglePopupOpened } from '../../store/ducks/settingsSlice';
import { useAppDispatch } from '../../store/hooks';
import { settingsLanguageSelector } from '../../store/selectors/settings.selector';
import { LANGUAGES } from '../constants/languages';

const LanguageSwitch = () => {
  const dispatch = useAppDispatch();
  const lang = useSelector(settingsLanguageSelector);
  const { i18n } = useTranslation();

  const handleThemeChange = (event: any): void => {
    const {
      target: { value },
    } = event;
    i18n.changeLanguage(value);
    dispatch(setLanguage(value));
    dispatch(togglePopupOpened());
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label="Language"
          color="primary"
          onChange={handleThemeChange}
        >
          <MenuItem color="secondary" value={LANGUAGES.EN}>EN</MenuItem>
          <MenuItem value={LANGUAGES.RO}>RO</MenuItem>
        </Select>
      </FormControl>
    </Box >
  );
}

export default LanguageSwitch;


