import React from 'react';
import logo from "../assets/img/logo1.png";

function Footer(props) {
    return (
        <footer className='mt-14 w-full p-10 flex justify-evenly items-center gap-x-4 bg-black border-t border-t-gray-800'>
            <div className='text-center'>
                <ul>
                    <li><a href='#home' className='hover:underline underline-offset-4'>Home</a></li>
                    <li><a href='#about' className='hover:underline underline-offset-4'>About</a></li>
                    <li><a href='#tokenomic' className='hover:underline underline-offset-4'>Tokenomic</a></li>
                    <li><a href='#roadmap' className='hover:underline underline-offset-4'>Roadmap</a></li>
                    <li><a href='#whitepaper' className='hover:underline underline-offset-4'>Whitepaper</a></li>
                </ul>
            </div>
            <div>
                <a href='/'>
                    <img src={logo} alt='black move' className='w-32'/>
                </a>
            </div>
            <div>
                <ul>
                    <li><a href='/' className='hover:underline underline-offset-4'>BSC SCAN</a></li>
                    <li><a href='/' className='hover:underline underline-offset-4'>PANCAKE SWAP</a></li>
                    <li><a href='https://twitter.com/biackmove1?s=21&t=OOMp86bwwB2FvsgIrU-cfA' className='hover:underline underline-offset-4'>TWITTER</a></li>
                    <li><a href='https://t.me/BlackMove' className='hover:underline underline-offset-4'>TELEGRAM</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;