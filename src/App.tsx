import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './common/components';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { settingsDarkModeSelector, settingsThemeTypeSelector } from './store/selectors/settings.selector';
import { getCustomTheme } from './common/helpers/theme.helper';


function App() {
  const themeType = useSelector(settingsThemeTypeSelector);
  const darkMode = useSelector(settingsDarkModeSelector);

  const theme = React.useMemo(() => createTheme(getCustomTheme(darkMode, themeType)), [darkMode, themeType]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

