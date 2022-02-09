import React,{useContext,useEffect,useState} from 'react';
import './Navbar.css';
import logo from "../images/logo.png"
import fire from '../../../firebase/firebase';
import { AccountContext } from '../accountContext';





 export default function Navbar() {

  const {switchToSignup,user,handleLogout,switchToSignin,active} = useContext(AccountContext);

  



  
  



  
    return (
        
        <nav class="menu-container">
  <input type="checkbox" aria-label="Toggle menu" />
  <span></span>
  <span></span>
  <span></span>

  <a href="#" class="menu-logo">
    <img src={logo} alt="My Awesome Website"/>
  </a>

  <div class="menu">
    <ul>
      <li>
        <a href="/">
          Home
        </a>
      </li>
      <li>
        <a href="#pricing">
          Competition
        </a>
      </li>
      <li>
        <a href="/insta">
          Instagram
        </a>
      </li>
      <li>
        <a href="#docs">
          Collections
        </a>
      </li>
    </ul>
    <ul>
     { active=="signup"?(
        <li>
        <a href="#" onClick={switchToSignin}>
          Login
        </a>
      </li>
      ):(
        <li>
        <a href="#" onClick={switchToSignup}>
          Signup
        </a>
      </li>
      )
 }
     
      {user?(<li>
        <a href="#" onClick={handleLogout}>
          Signout
        </a>
      </li>):
      (
        ''
      )}
    </ul>
  </div>
</nav>

    )
}

//export default Navbar;
