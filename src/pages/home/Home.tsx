import { Button } from '@mui/material';
import React from 'react'

import './Home.scss';

export const Home = () => {

  return (
    <div className="home-component">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  )
};