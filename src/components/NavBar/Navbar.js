import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
export default function Navbar() {
  return (
   <nav className="navbar">
<img src={logo} alt="Logo"  className="logo"/>
<div className="desktopMenu">
<Link className="desktopMenuListItem">Home</Link>
<Link className="desktopMenuListItem">About</Link>
<Link className="desktopMenuListItem">Portfolio</Link>
<Link className="desktopMenuListItem">Clients</Link>

</div>
<button className="desktopMenuBtn">
    <img src={contactImg} alt=""  className='desktopMenuImg'/>Contact Me</button>
   </nav>
  )
}
