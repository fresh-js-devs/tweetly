import React from 'react';

import Logo from '../Logo/Logo';

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <Logo />
      <div className='container'>
        <h1>Main page</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
