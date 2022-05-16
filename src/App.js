import React,{createContext} from'react';
import { useState } from 'react';
import Features from './features';
import Navbar from './Navbar.js';

export const cart =createContext(); 
const App=()=>{
   


 const[cart1,setCart1]=useState(0);
 function increase(){
    setCart1(cart1+1);
}
function decrease(){
    setCart1(cart1-1);
}
    return (
       <cart.Provider value={{cart1,increase,decrease}}>
            
        <Navbar />
        <Features />
       
        
       </cart.Provider>
    )
}
export default App;