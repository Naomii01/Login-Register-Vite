import React from 'react';
import { Outlet } from 'react-router-dom';
import Title from './Title';
import NavBar from './NavBar';

const Layout= () => {
  return (
    <>
     <Title />
      <NavBar />
        <Outlet />
    </>
  )
}

export default Layout