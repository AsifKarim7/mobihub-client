import React from 'react';
import banner1 from '../../../assests/images/banner.jpg'
import banner2 from '../../../assests/images/banner2.png'

const Banner = () => {
    return (
        <div className='max-w-screen-2xl mx-auto my-10'>
            <div className="carousel w-full mx-auto rounded-xl shadow-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='banner-gradient w-full'>
                        <img src={banner1} alt='' className="w-full" />
                    </div>

                    <div className="absolute text-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <h2 className='text-7xl font-bold pb-10 text-red-400'>BOOK<span className='text-[#2666CF]'> YOUR FLIGHT</span></h2>
                        <h2 className='text-lg font-semibold pb-10 text-white'>Find your next stay. Get the best experience of your journey with us. And save 15% with Late Escape Deals</h2>
                        <button className="btn btn-outline border-red-400 text-white">Book Now</button>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <div className='w-full banner-gradient'>
                        <img src={banner2} alt='' className="w-full" />
                    </div>
                    <div className="absolute  text-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <h2 className='text-7xl font-bold pb-10 text-white '>LUXURY PRIVATE JETS <span className='text-orange-300 '>OFFERS!!</span> </h2>
                        <h2 className='text-lg font-semibold pb-10 text-white'>It's like a dream come true moment. Now get rent and travel by your own private charter in lowest cost. </h2>
                        <button className="btn btn-outline border-orange-200 text-white">Read More</button>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;