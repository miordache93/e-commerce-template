import React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { toogleSideBar } from '../../store/ducks/settingsSlice';
import { useAppDispatch } from '../../store/hooks';

export const MobileHeader = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, display: { 'md': 'none'} }}>
        <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <IconButton color="inherit" aria-label="open drawer" onClick={() => dispatch(toogleSideBar())}>
            <MenuIcon />
          </IconButton>
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingBasketIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          {/* <IconButton color="inherit">
            <MoreIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

