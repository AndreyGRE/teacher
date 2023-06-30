import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

 function Header() {
    
    const [state,setState]=useState(0)
    
    const onCategor =(i)=>{
        setState(i)
    }
      

    
    return (
        <nav className="header1">
           
            <div className="menu1">
                <div className="header__logo1">
                    <img src="./favicon.ico" alt="LOPED logo" width={60} /> 
                </div>
            
                <ul className='menu1'>
                    <li className="level1">
                        <NavLink id={0} onClick={() => onCategor(0)} className={state === 0 ? 'active1 level1' : ' level1'} to="/glav"> Главная </NavLink>
                    </li>
                    <li className="level1">
                        <NavLink id={1} onClick={() => onCategor(1)} className={state === 1 ? 'active1 level1' : ' level1'} to="/about-me"> Обо мне </NavLink>
                    </li>
                    <li className="level1">
                        <NavLink id={2} onClick={() => onCategor(2)} className={state === 2 ? 'active1 level1' : ' level1'} to="/for-parents"> Для вас родители </NavLink>
                    </li>
                    <li className="level1">
                        <NavLink id={3} onClick={() => onCategor(3)} className={state === 3 ? 'active1 level1' : ' level1'} to="/contacts"> Контакты </NavLink>
                    </li>
                </ul>
            </div>
            
        </nav>
       
            );
}

export default Header;