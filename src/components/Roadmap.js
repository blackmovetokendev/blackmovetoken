import React from 'react'
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


function Options(props) {
    const chartData = {
        labels:['Presale','Liquidity','Marketing'],
        datasets: [
            {
                data: [33.3, 33.3, 33.3],
                backgroundColor: ["#ffffff", "#d4d417", "#0fa33e"],
                hoverBackgroundColor: ["#ffffff", "#d4d417", "#0fa33e"],
                borderWidth: 1,
                borderColor:'transparent'
            }
        ]
    }


    return (
        <section id='tokenomic' className='w-full mt-10 p-4 text-center'>
            <h1 className='md:text-6xl font-bold mt-5 text-3xl'>Tokenomic</h1>
            <div className='w-full lg:flex justify-around items-center p-2'>
                <div className='md:w-1/3 p-3 md:m-0 m-auto text-white w-2/3'>
                    <Doughnut data={chartData}/>
                </div>
                <div className='md:w-1/3 p-3'>
                    <h4 className='text-xl mt-2'>Presale : <span className='text-xl'>%33.3</span></h4>
                    <h4 className='text-xl mt-2 text-green-500'>Liquidity : <span className='text-xl text-white'>%33.3</span></h4>
                    <h4 className='text-xl mt-2 text-yellow-500'>Marketing : <span className='text-xl text-white'>%33.3</span></h4>
                </div>
            </div>
        </section>
    );
}

export default Options;