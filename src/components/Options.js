import React from 'react';
import friendImage from '../assets/img/friends.png'
import soloImage from '../assets/img/solo.jpg'


function Options(props) {

    return (
        <section id='options' className='w-full mt-10 p-4 text-center'>
            <h1 className='md:text-6xl font-bold mt-5 text-3xl'>Options</h1>
            <div className='w-full lg:flex justify-around items-center p-2'>
                <div className='md:w-1/3 p-3 md:m-0 m-auto mb-7 md:mb-0'>
                    <img src={soloImage} alt='' className='w-full rounded'/>
                    <h4 className='text-3xl mt-2'>Solo</h4>
                    <p>You can run alone if you wish. You can compete in Challenges</p>
                </div>
                <span className='text-3xl'>&</span>
                <div className='md:w-1/3 p-3 mt-7 md:mt-0'>
                    <img src={friendImage} alt='' className='w-full rounded'/>
                    <h4 className='text-3xl mt-2'>Friends</h4>
                    <p>If you wish, you can run with your friends and perform challenges together.</p>
                </div>
            </div>
        </section>
    );
}

export default Options;