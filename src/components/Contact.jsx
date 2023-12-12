import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div name="contact" className="bg-slate-200 text-[#873e23] p-8 md:p-16 lg:p-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Contact Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <div className='flex text-3xl'>
                        <FaLocationDot />
                        <h3 className="text-xl font-semibold mb-2 ps-2">Location</h3>
                    </div>
                    <p>Bangladesh</p>
                </div>
                <div>
                    <div className='flex text-3xl'>
                        <MdEmail />
                        <h3 className="text-xl font-semibold mb-2 ps-2"> Email</h3>
                    </div>
                    <p>theteeshop@yahoo.com</p>
                </div>
                <div>
                    <div className='flex text-3xl'>
                        <FaPhoneVolume />
                        <h3 className="text-xl font-semibold mb-2 ps-2"> Phone</h3>
                    </div>
                    <p>(123) 456-7890</p>
                </div>
                <div className="col-span-2">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border-2 border-white rounded-md p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border-2 border-white rounded-md p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-semibold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full border-2 border-white rounded-md p-2"
                                required
                            ></textarea>
                        </div>
                        <button type='submit' className='px-8 py-3 bg-[#873e23] text-slate-200 rounded-3xl'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
