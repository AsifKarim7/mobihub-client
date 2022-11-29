import React, { useEffect, useState } from 'react';

const AdvertisedItems = () => {
    const [advertisedProducts, setAdvertisedProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/advertisedProduct')
            .then(res => res.json())
            .then(data => setAdvertisedProducts(data))
    }, []);


    return (
        <div className="max-w-screen-xl mx-auto md:pt-10 pb-6">
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>
                {
                    advertisedProducts.map(product => <div
                        key={product._id}
                        className="card shadow-lg bg-blue-100">
                        <div className='flex justify-between py-5 px-5'>
                            <h2 className='text-xl font-bold'>{product.seller}</h2>
                            <p className='text-gray-600 font-semibold text-base'>{product.location}</p>
                        </div>
                        <img src={product.img} className="w-auto h-72" alt="Album" />
                        <div className=" card-body px-4">
                            <h2 className="text-xl font-bold pb-5 text-blue-500">{product.name}</h2>
                            <p> <span className='font-semibold text-lg'> Description :</span> {product.description}.</p>
                            <p> <span className='font-semibold text-lg'> Product used :</span> {product.used}.</p>

                            <div className='flex justify-between py-5'>

                                <p className='font-bold text-lg text-blue-600'> <span className='font-semibold text-lg'>Price : </span>$ {product.price}</p>
                                <p className='font-bold text-end px-5'> <span className='font-semibold text-lg'>Condition :</span> {product.condition}</p>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

        </div>
    );
};

export default AdvertisedItems;