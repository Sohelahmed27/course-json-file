import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  // const activeStyle ={fontWeight: "bold",
  // color: "red"

//   }
  return (
    
    <div 
    className='Header'
    >
      <NavLink
  to="/home" className='text'
  
>
  Home
</NavLink>
      
      <NavLink
  to="/about" className='text'
  // activeStyle={activeStyle}
>
  About Us
</NavLink>
      
      <NavLink
  to="/courses" className='text'
  // activeStyle={activeStyle}
>
  Courses
</NavLink>
      
      <NavLink
  to="/contact" className='text'
  // activeStyle={activeStyle}
>
  Contact
</NavLink>
      
    </div>
  );
};

export default Header;