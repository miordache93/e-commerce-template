import { AppBar, Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { NAV_ITEMS } from '../constants/navItems';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks';
import { toogleSideBar } from '../../store/ducks/settingsSlice';
import { settingsSideBarOpenedSelector } from '../../store/selectors/settings.selector';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export const Header = (props: Props) => {
  const { window } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const sideBarOpened = useSelector(settingsSideBarOpenedSelector);

  const toggleSideBar = () => {
    dispatch(toogleSideBar());
  };


  const drawer = (
    <Box onClick={() => toggleSideBar()} sx={{ textAlign: 'center' }}>
      <Link to="/">
        <Typography variant="h6" sx={{ my: 2 }}>
          {t('TITLE')}
        </Typography>
      </Link>
      <Divider />
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem color="primary" key={`${item.name}-${item.id}`} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={t(item.name)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar>
            <Link to="/" >
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >           {t('TITLE')}
              </Typography>
            </Link>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {NAV_ITEMS.map((item, index) => (
                <Button key={`${item.name}-${index}`} sx={{ color: '#fff' }} component={Link} to={item.path}>
                  {t(item.name)}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            color="primary"
            container={container}
            variant="temporary"
            open={sideBarOpened}
            onClose={() => toggleSideBar()}
            ModalProps={{
              keepMounted: true
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </div>
  )
};

