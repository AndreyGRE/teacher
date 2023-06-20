import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

 function Header() {
    
    const [state,setState]=useState()
    
    const onCategor =(i)=>{
        setState(i)
    }
      

    
    return (
        <nav className="header">
            <div className="section_inner ">
            <div className="menu">
                <div className="header__logo">
                    <img src="./favicon.ico" alt="LOPED logo" /> 
                </div>
            
                <ul className='menu'>
                    <li className="level">
                        <NavLink id={0} onClick={() => onCategor(0)} className={state === 0 ? 'active level' : ' level'} to="/glav"> Главная </NavLink>
                    </li>
                    <li className="level">
                        <NavLink id={1} onClick={() => onCategor(1)} className={state === 1 ? 'active level' : ' level'} to="/about-me"> Обо мне </NavLink>
                    </li>
                    <li className="level">
                        <NavLink id={2} onClick={() => onCategor(2)} className={state === 2 ? 'active level' : ' level'} to="/for-parents"> Для вас родители </NavLink>
                    </li>
                    <li className="level">
                        <NavLink id={3} onClick={() => onCategor(3)} className={state === 3 ? 'active level' : ' level'} to="/contacts"> Контакты </NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
       
            );
}

export default Header;