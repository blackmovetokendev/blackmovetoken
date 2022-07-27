import React from 'react';
import logo from '../assets/img/logo1.png'

function Navbar(props) {
    return (
        <nav className='w-full bg-black border-b border-b-gray-800 p-2 pb-4 flex justify-around items-center'>
          <a href='/'>
              <img src={logo} alt='black move' className='w-16'/>
          </a>
            <nav className='hidden md:flex md:justify-around md:items-center md:gap-x-8'>
                    <a href='#home' className='hover:underline underline-offset-4'>Home</a>
                    <a href='#about' className='hover:underline underline-offset-4'>About</a>
                    <a href='#tokenomic' className='hover:underline underline-offset-4'>Tokenomic</a>
                    <a href='#roadmap' className='hover:underline underline-offset-4'>Roadmap</a>
                    <a href='#whitepaper' className='hover:underline underline-offset-4'>Whitepaper</a>
            </nav>
            <a href='/' className='bg-white text-black rounded w-32 hover:bg-gray-900 hover:text-white p-2 uppercase text-center'>
              buy
            </a>
        </nav>
    );
}

export default Navbar;