import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Futer from './Futer';
import Content from './Content';

const AppWrap = () => {
  return (
    <div className='app__wrap'>
      <Header/>
      <Nav/>
      <Content/>
      <Futer/>
    </div>
  );
};

export default AppWrap;