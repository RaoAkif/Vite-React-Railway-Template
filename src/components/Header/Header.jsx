import React from 'react'
import './Header.css';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineCaretDown } from 'react-icons/ai';


const Header = () => {
  return (
    <div className='main'>
      <h3 style={{paddingLeft: '15px'}}>
        Header
      </h3>
      <div style={{paddingRight: '15px', display: "flex", alignItems: "center"}}>
      <CgProfile id='profile-pic' />
      <AiOutlineCaretDown id='drop-down' />
      </div>
    </div>
  )
}

export default Header;