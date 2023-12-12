import React from 'react';


const About = () => {
    return (
        <div name="about"
            className="bg-cover bg-center h-screen flex items-center justify-center mb-24"
            style={{ backgroundImage: 'url("https://i.ibb.co/r7qj435/banner.png")' }}
        >
            <div className="text-slate-200 text-center p-8 md:p-16 lg:p-24">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg mb-4">
                            We are not just a t-shirt ordering website; we are a celebration of self-expression and creativity. Embrace the freedom to design and wear your story with our high-quality, customizable t-shirts.
                        </p>
                        <p className="text-lg mb-4">
                            Whether you're expressing your unique identity, promoting your brand, or commemorating a special event, we provide a canvas for your imagination.
                        </p>
                    </div>

                    <div>
                        <p className="text-lg mb-4">
                            Dive into a seamless ordering experience that marries comfort, quality, and your unique vision. At TheTeeShop, we believe that every t-shirt tells a tale, and we're excited to help you craft yours.
                        </p>
                        <p className="text-lg mb-4">
                            Join us in making every garment more than just clothing – let it be a statement, a memory, and a piece of art. Explore the possibilities and unleash your creativity with us today!
                        </p>
                    </div>
                </div>

                <button className="bg-[#873e23] text-slate-200 rounded-3xl px-8 py-3 mb-4">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default About;
