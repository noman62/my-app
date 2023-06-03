import React from 'react';
import SignIn from '../components/AuthNew/SignIn/SignIn';
import Navbar from '../components/Navbar/Navbar';

const login = () => {
  return (
    <div>
      <Navbar/>
      <SignIn/>
    </div>
  );
};

export default login;