import React from 'react';
import './Navbar.css';
import {useContext} from 'react';
import { cart } from './App.js';

const Navbar = () => {
    
    const {cart1}=useContext(cart);
    return (
        <div>
           <nav>
           <div className="navbar">
                <span className="name">
                 ArtisansBay
                </span>
   <div className="cart">
       <span>
       <i class="cart plus icon"></i>   
       </span>
       <span>
           {cart1}
       </span>
   </div>
            </div>
           </nav>
        </div>
    );
};

export default Navbar;