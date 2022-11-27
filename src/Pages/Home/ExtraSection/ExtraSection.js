import React from 'react';
import img1 from '../../../assests/images/phones.png'

const ExtraSection = () => {
    return (
        <div className="hero my-10 bg-gray-50">
            <div className="hero-content flex-col md:flex-row">

                <div>
                    <div className='text-3xl text-center md:text-start md:text-6xl font-bold md:-mt-10'>
                        <h1>BUY & SELL YOUR</h1>
                        <h1 className="text-[#2666CF]">SMARTPHONE</h1>
                        <h1 className='flex items-center justify-center md:justify-start gap-3'>FOR THE BEST PRICE</h1>
                    </div>

                    <div className='mt-10 text-justify font-medium'>
                        <p>MobiHub offers both buyer to buy & seller to sell their smartphone at any convenient location and time, and accepts various payment methods either digitally or by cash. MobiHub’s goal is to give endless options to consumers.</p>
                    </div>
                </div>


                <img src={img1} alt="phones" className="max-w-xs md:max-w-sm md:ml-32" />
            </div>
        </div>
    );
};

export default ExtraSection;