import React from 'react'



function Roadmap(props) {

    return (
        <section id='roadmap' className='w-full mt-10 p-4 text-center'>
            <h1 className='md:text-6xl font-bold mt-5 text-3xl'>Roadmap</h1>
            <div className="flex flex-col justify-center py-6 lg:py-12">
                <div className="w-full mx-auto lg:max-w-4xl">
                    <div className="relative">
                        <div
                            className="absolute hidden w-px h-full transform -translate-x-1/2 bg-yellow-600 lg:block left-1/2"></div>
                        <div className="space-y-12 lg:space-y-8">
                            <div>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-start w-full mx-auto">
                                        <div className="w-full lg:w-1/2 lg:pr-8">
                                            <div className="p-4 rounded  border moved">
                                                <b className='text-xl'>Quarter 1</b>
                                                <ul>
                                                    <li>Pinksale Presale</li>
                                                    <li>Pancakeswap Listing</li>
                                                    <li>Advertising Marketing</li>
                                                    <li>CMC And Cg Introduction</li>
                                                    <li>Great Partnership👟👟</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-white text-black rounded-full left-1/2 sm:translate-y-0">
                                        <span className="text-black">1</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-end w-full mx-auto">
                                        <div className="w-full lg:w-1/2 lg:pl-8">
                                            <div className="p-4 rounded  border moved">
                                                <b className='text-xl'>Quarter 2</b>
                                                <ul>
                                                    <li>Application Completion</li>
                                                    <li>Earn Pedometer Tokens</li>
                                                    <li>Stock Exchange Listing</li>
                                                    <li>CMC And Cg Introduction</li>
                                                    <li>Big Trends👟👟</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-white text-black rounded-full left-1/2 sm:translate-y-0">
                                        <span className="text-black">2</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-start w-full mx-auto">
                                        <div className="w-full lg:w-1/2 lg:pr-8">
                                            <div className="p-4 rounded  border moved">
                                                <b className='text-xl'>Quarter 3</b>
                                                <ul>
                                                    <li>Application Great Partnership</li>
                                                    <li>Big Screen Ads</li>
                                                    <li>Asian Marketing</li>
                                                    <li>Middle East Marketing</li>
                                                    <li>Own Shoe Product👟👟</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-white text-black rounded-full left-1/2 sm:translate-y-0">
                                        <span className="text-black">3</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-end w-full mx-auto">
                                        <div className="w-full lg:w-1/2 lg:pl-8">
                                            <div className="p-4 rounded border moved">
                                                <b className='text-xl'>Quarter 4</b>
                                                <p>⏳</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-white text-black rounded-full left-1/2 sm:translate-y-0">
                                        <span className="text-black">4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Roadmap;