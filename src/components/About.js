import React from 'react';
import bannerImage from '../assets/img/logo2.JPG'
import {useNavigate} from 'react-router-dom'

function Banner(props) {
    const navigate = useNavigate()

    return (
        <section id='home' className='w-full mt-5 p-4 text-center lg:flex lg:justify-center lg:gap-x-8'>
            <div className='w-2/4 m-auto'>
                <h1 className='lg:text-6xl font-bold mt-5 text-5xl'>Black Move Token</h1>
                <p className='m-auto mt-11 text-2xl'>
                    👟Black Movement is a Walk and Win Project. We have produced a project that can win awards by walking yourself with the application. We will come to the agenda with the best phenomenon advertisements with the program that will become operational after the pre-sale is over.👟
                </p>
                <button onClick={e => navigate('/blackmovetoken_whitepaper.pdf') } className='bg-white text-black rounded hover:bg-gray-900 hover:text-white p-2 uppercase text-center w-1/2 mt-5'>Go Whitepaper</button>
            </div>
            <img src={bannerImage} className='lg:w-1/3 lg:h-1/3 w-1/2  m-auto lg:mt-0 mt-8' alt=''/>
        </section>
    );
}

export default Banner;