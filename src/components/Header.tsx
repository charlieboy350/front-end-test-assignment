import React from 'react';
import Logo from '../assets/logo.svg';


const Header = () => {
    return (
        <header className='py-6 text-center md:text-left'>
            <a href="#" className='inline-block'>
                <img src={Logo} alt="Logo"/>
            </a>
        </header>
    )
}

export default Header;