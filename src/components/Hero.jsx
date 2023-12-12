import React from 'react';
import banner from '../assets/banner.jpg';

const Hero = () => {
    return (
        <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between bg-center bg-center'
            style={{ backgroundImage: `url(${banner})` }}>
            <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    {/* <p className='text-2xl italic'>Start shopping now!</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold text-[#873e23]'>Ready to make a statement?</h1>
                    <p className='text-2xl italic'>Style in every wear</p>
                    <button className='py-3 px-6 sm:w-[35%] my-4 rounded-3xl bg-pink-700'>Let's Go!</button> */}
                </div>
                <div className="flex items-center justify-center">
                    {/* <img className='object-contain w-full h-full max-w-[600px] max-h-[400px]' src={herobg} alt="" />
                    <img className='object-contain w-full h-full max-w-[600px] max-h-[400px]' src={herobg2} alt="" /> */}
                </div>
            </div>
        </div>


    );
};

export default Hero;