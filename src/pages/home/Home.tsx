import React from 'react'
import { googleSignIn } from '../../api';
import { Categories } from './components/Categories';

import './Home.scss';

export const Home = () => {

  const signIn = () => {
    googleSignIn().then(res => {
      console.log(res);
    }, err => {
      console.error(err);
    });
  };

  return (
    <div className="Home">
        <Categories />
        <button onClick={signIn}>Google SignIn</button>
    </div>
  )
};