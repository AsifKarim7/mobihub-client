import React from 'react';
import banner1 from '../../../assests/images/banner.jpg';
import banner2 from '../../../assests/images/banner2.png';


const Banner = () => {

    return (
        <div className='max-w-screen-2xl mx-auto my-10'>
            <div className="carousel w-full mx-auto rounded-xl shadow-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='banner-gradient w-full'>
                        <img src={banner1} alt='' className="w-full" />
                    </div>

                    <div className="absolute text-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <h2 className='text-3xl md:text-5xl font-bold pb-2 text-white'>Unbeatble Choices for</h2>
                        <h2 className='text-5xl md:text-7xl font-semibold pb-10 text-[#DEF6FF]'>Second Hand Mobiles</h2>
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

                    <div className="absolute text-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <h2 className='text-5xl md:text-7xl font-bold pb-2 text-[#DEF6FF]'>Great Stuff at Great Value</h2>
                        <h2 className='text-3xl md:text-5xl font-semibold pb-10 text-white'>We are Here to Serve You the <span className='text-[#DEF6FF]'>BEST</span></h2>
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