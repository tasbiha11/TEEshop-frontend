import React from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            userName: 'Nam Do San',
            comment: 'Great experience! The service was excellent.',
            rating: 5,
            img: 'https://i.ibb.co/s2csngv/nam-do-san.jpg',
        },
        {
            id: 2,
            userName: 'Son Ye Jin',
            comment: 'Amazing product! Would highly recommend.',
            rating: 4,
            img: 'https://i.ibb.co/6g7f7kN/son-ye-jin.jpg',
        },
        {
            id: 3,
            userName: 'Jang Han Seok',
            comment: 'Ordered for my company, it was a good deal.',
            rating: 5,
            img: 'https://i.ibb.co/fxvp9xR/jang-han-seok.jpg',
        },
        {
            id: 4,
            userName: 'Son Hye Kyo',
            comment: 'Loved their designs. Would order again!',
            rating: 5,
            img: 'https://i.ibb.co/w7GVd6S/son-hye-kyo.jpg',
        },
        {
            id: 5,
            userName: 'Park Seo Joon',
            comment: 'They gave life to my imaginations!',
            rating: 5,
            img: 'https://i.ibb.co/W0VbG5b/park-seo-joon.jpg',
        },
        {
            id: 6,
            userName: 'Jeon In Gyu',
            comment: 'Customer friendly and very patient. Great tshirts!',
            rating: 4,
            img: 'https://i.ibb.co/DRZ8dM3/jeon-in-gyu.jpg',
        },
    ];

    return (
        <div name="reviews" className="p-8 md:p-16 lg:p-24">
            <h2 className="text-[#873e23] text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Customer Reviews</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-white p-4 rounded-md shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                                <img src={review.img} alt={review.userName} className="w-full h-full object-cover" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold">{review.userName}</h3>
                                <div className="flex items-center">
                                    {[...Array(review.rating)].map((_, index) => (
                                        <FaStar key={index} className="text-yellow-500" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
