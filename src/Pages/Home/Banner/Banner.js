import React from 'react';

const Banner = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='banner-gradient w-full'>
                        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbmV8ZW58MHx8MHx8&w=1000&q=80" alt='' className="w-full" />
                    </div>

                    <div className="absolute  text-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <h2 className='text-7xl font-bold pb-10 text-red-400'>BOOK<span className='text-white'> YOUR FLIGHT</span></h2>
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
                        <img src="https://www.investopedia.com/thmb/zn1EiDhGYBUagCqqDQ1HiuhrCO4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-628209232-3ba228dce74841d490f83d74d4b80772.jpg" alt='' className="w-full" />
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