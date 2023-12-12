import React from 'react';
import tshirt1 from '../assets/1.jpg';
import tshirt4 from '../assets/4.jpg';
import tshirt5 from '../assets/5.jpg';
import tshirt6 from '../assets/6.jpg';
import tshirt8 from '../assets/8.jpg';
import tshirt10 from '../assets/10.jpg';
import { FaShoppingCart } from "react-icons/fa";

const Collection = () => {
    return (
        <div name='collection' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl text-[#873e23] font-bold'>Fabulous in Every Way</h2>
                    <p className='text-2xl py-6 text-gray-500'>Make it yours! Our customization options let you add a personal touch to your t-shirts. Whether it's a special date, a quirky quote, or your own design, create a piece that's uniquely you.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-1 px-2'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <img src={tshirt1} alt="" />
                        <p className='flex items-center justify-center mt-2 font-bold'>$ 15 <FaShoppingCart className='ms-2' /></p>
                        <div className="flex items-center justify-center space-x-4 mt-4">
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded focus:outline-none focus:shadow-outline-blue"
                            > +
                            </button>
                            <p className="text-xl font-bold"></p>
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded focus:outline-none focus:shadow-outline-red"

                            > -
                            </button>
                        </div>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <img src={tshirt8} alt="" />
                        <p className='flex items-center justify-center mt-2 font-bold'>$ 25 <FaShoppingCart className='ms-2' /></p>
                        <div className="flex items-center justify-center space-x-4 mt-4">
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded focus:outline-none focus:shadow-outline-blue"

                            > +
                            </button>
                            <p className="text-xl font-bold"></p>
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded focus:outline-none focus:shadow-outline-red"

                            >-
                            </button>
                        </div>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <img src={tshirt10} alt="" />
                        <p className='flex items-center justify-center mt-2 font-bold'>$ 10<FaShoppingCart className='ms-2' /></p>
                        <div className="flex items-center justify-center space-x-4 mt-4">
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded focus:outline-none focus:shadow-outline-blue"

                            > +
                            </button>
                            <p className="text-xl font-bold"></p>
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded focus:outline-none focus:shadow-outline-red"

                            > -
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-1 px-2 my-5'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <img src={tshirt4} alt="" />
                        <p className='flex items-center justify-center mt-2 font-bold'>$ 30<FaShoppingCart className='ms-2' /></p>
                        <div className="flex items-center justify-center space-x-4 mt-4">
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded focus:outline-none focus:shadow-outline-blue"

                            >+
                            </button>
                            <p className="text-xl font-bold"></p>
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded focus:outline-none focus:shadow-outline-red"
                            >
                                -
                            </button>
                        </div>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <img src={tshirt5} alt="" />
                        <p className='flex items-center justify-center mt-2 font-bold'>$ 20<FaShoppingCart className='ms-2' /></p>
                        <div className="flex items-center justify-center space-x-4 mt-4">
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded focus:outline-none focus:shadow-outline-blue"
                            >  +
                            </button>
                            <p className="text-xl font-bold"></p>
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded focus:outline-none focus:shadow-outline-red"
                            >  -
                            </button>
                        </div>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <img src={tshirt6} alt="" />
                        <p className='flex items-center justify-center mt-2 font-bold'>$ 15<FaShoppingCart className='ms-2' /></p>
                        <div className="flex items-center justify-center space-x-4 mt-4">
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded focus:outline-none focus:shadow-outline-blue"
                            >
                                +
                            </button>
                            <p className="text-xl font-bold"></p>
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded focus:outline-none focus:shadow-outline-red"
                            >
                                -
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;