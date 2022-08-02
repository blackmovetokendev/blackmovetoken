import React from 'react';
import bannerImage from '../assets/img/logo2.JPG'
import {useNavigate} from 'react-router-dom'
import googlePLay from '../assets/img/google_play.svg'
import appStore from '../assets/img/app_store.svg'

function Banner(props) {
    const navigate = useNavigate()

    return (
        <section id='home' className='w-full  mt-5 pt-2 lg:p-4 text-center lg:flex lg:justify-center'>
            <img src={bannerImage} className=' lg:hidden moved lg:block lg:w-1/3 lg:h-1/3 w-1/2  m-auto rounded lg:mt-0 mt-8 hover:shadow-md hover:shadow-yellow-500 hover:transition-all' alt=''/>
            <div className='w-4/5 lg:w-2/4 m-auto mt-20'>
                <h1 className='lg:text-6xl font-bold mt-5 text-5xl '>Black Move Token</h1>
                <p className='m-auto mt-11 text-2xl mb-4'>
                    👟Black Movement is a Walk and Win Project. We have produced a project that can win awards by walking yourself with the application. We will come to the agenda with the best phenomenon advertisements with the program that will become operational after the pre-sale is over.👟
                </p>
                <button onClick={e => navigate('/google.play.com') } className='rounded p-2 uppercase text-centermt-5 hover:shadow-xl'>
                    <img src={googlePLay} className='' alt=''/>
                </button>
                <button onClick={e => navigate('/appstore.com') } className='rounded p-2 uppercase text-centermt-5 hover:shadow-xl'>
                    <img src={appStore} className='' alt=''/>
                </button>
            </div>
            <img src={bannerImage} className='hidden moved lg:block lg:w-1/3 lg:h-1/3 w-1/2  m-auto rounded lg:mt-0 mt-8 hover:shadow-md hover:shadow-yellow-500 hover:transition-all' alt=''/>
        </section>
    );
}

export default Banner;