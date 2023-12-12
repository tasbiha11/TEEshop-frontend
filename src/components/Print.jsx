import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";

const Print = () => {
    return (
        <div name='print' className='w-full text-white mt-24'>
            <div className='w-full h-[800px] bg-[#873e23] absolute mix-blend-overlay'></div>

            <div className='max-w-[1240px] mx-auto py-12'>

                <div className='text-center py-8 text-slate-300'>
                    <h2 className='text-3xl uppercase'>Print Your Design!</h2>
                    <h3 className='text-5xl font-bold text-white py-8'>Best price for the best quality</h3>
                    <p className='text-3xl'>
                        Bring your imagination to life, your design our duty
                    </p>
                </div>

                <div className='grid md:grid-cols-2'>

                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                        <span className='uppercase px-3 py-1 bg-[#873e23] text-white rounded-2xl text-sm'>Standard</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$20</p>
                        </div>
                        <p className='text-2xl py-8 text-slate-500'>Best for individual use</p>
                        <div className='text-2xl'>
                            <p className='flex py-4'><IoIosCheckmarkCircle className='w-8 mr-5 mt-1 text-[#873e23]' />3D Designs</p>
                            <p className='flex py-4'><IoIosCheckmarkCircle className='w-8 mr-5 mt-1 text-[#873e23]' />1-5 piece set</p>
                            <p className='flex py-4'><IoIosCheckmarkCircle className='w-8 mr-5 mt-1 text-[#873e23]' />Natural Dye</p>
                            <p className='flex py-4'><IoIosCheckmarkCircle className='w-8 mr-5 mt-1 text-[#873e23]' />Comfortable Fabrics</p>
                            <p className='flex py-4'><IoIosCheckmarkCircle className='w-8 mr-5 mt-1 text-[#873e23]' />Eco Friendly</p>
                            <button className='w-full py-4 my-4 bg-[#873e23] text-slate-200 rounded-3xl'>Order Now</button>
                        </div>
                    </div>
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                        <span className='uppercase px-3 py-1 bg-[#873e23] text-white  rounded-2xl text-sm'>Premium</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$80</p>
                        </div>
                        <p className='text-2xl py-8 text-slate-500'>Convenient for large companies</p>
                        <div className='text-2xl'>
                            <p className='flex py-4'><IoIosCheckmarkCircle className='w-8 mr-5 mt-1 text-[#873e23]' />3D Designs</p>
                            <p className='flex py-4'><IoIosCheckmarkCircle className='w-8 mr-5 mt-1 text-[#873e23]' />100 Pieces</p>
                            <p className='flex py-4'><IoIosCheckmarkCircle className='w-8 mr-5 mt-1 text-[#873e23]' />Colorful</p>
                            <p className='flex py-4'><IoIosCheckmarkCircle className='w-8 mr-5 mt-1 text-[#873e23]' />Cotton Fabrics</p>
                            <p className='flex py-4'><IoIosCheckmarkCircle className='w-8 mr-5 mt-1 text-[#873e23]' />
                                Free Delivery</p>
                            <button className='w-full py-4 my-4 bg-[#873e23] text-slate-200 rounded-3xl'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Print;