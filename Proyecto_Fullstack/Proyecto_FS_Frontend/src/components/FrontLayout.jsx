import React from 'react';
import { Outlet } from 'react-router-dom';
import Provider from '../context/Provider';

const FrontLayout = () => {
  return (
    <>
    <Provider>
      <div className='container general-text'>
      <h1>Ejercicio</h1>
      <Outlet />
      </div>
    </Provider>
   </>
  )
}

export default FrontLayout;