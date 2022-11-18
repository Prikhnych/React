import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import Futer from './Futer';

const AppWrap = () => {
  return (
    <div className='app__wrap'>
      <Header/>
      <Nav/>
      <Component/>
      <Futer/>
    </div>
  );
};

export default AppWrap;