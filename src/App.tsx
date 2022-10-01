import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header, MobileHeader, Settings } from './common/components';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { settingsDarkModeSelector, settingsLanguageSelector, settingsThemeTypeSelector } from './store/selectors/settings.selector';
import { getCustomTheme } from './common/helpers/theme.helper';
import * as locales from '@mui/material/locale';
import { Mui_Languages_Map } from './common/constants/languages';

type SupportedLocales = keyof typeof locales;

function App() {
  const themeType = useSelector(settingsThemeTypeSelector);
  const darkMode = useSelector(settingsDarkModeSelector);
  const lang = useSelector(settingsLanguageSelector);
  
  const [locale] = React.useState<SupportedLocales>(Mui_Languages_Map[lang]);

  const theme = React.useMemo(() => createTheme(getCustomTheme(darkMode, themeType), locales[locale]), [darkMode, themeType, locale]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <div className="container">
          <Outlet />
        </div>
        <Settings />
        <MobileHeader />
      </ThemeProvider>
    </div>
  );
}

export default App;

