import React from 'react';
import {NavLink} from 'react-router-dom';

import './Logo.css';

const Logo = ({ onClick }) => {
  return (
    <div onClick={onClick} className='logo'>
     <NavLink to="/">Tweetly</NavLink> 
    </div>
  );
};

export default Logo;
