import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdvertisedItems = () => {
    const [advertisedProducts, setAdvertisedProducts] = useState([]);

    useEffect(() => {
        fetch('https://mobihub-server-ecru.vercel.app/advertisedProduct')
            .then(res => res.json())
            .then(data => setAdvertisedProducts(data))
    }, []);

    console.log(advertisedProducts)

    return (
        <div className="max-w-screen-xl mx-auto md:pt-10 pb-6">
            <h1 className='text-3xl md:text-5xl font-bold text-center text-black'>ADVERTISED PRODUCTS</h1>
            <p></p>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>
                {
                    advertisedProducts.map(product => <div
                        key={product._id}
                        className="card shadow-lg bg-white">
                        <img src={product.img} className="w-auto h-72 rounded-t-xl" alt="Album" />
                        <div className=" card-body px-4">
                            <h2 className="text-xl font-bold pb-5 text-[#2666CF]">{product.name}</h2>
                            <p className='font-bold text-lg'>Product used:<span className='font-semibold text-lg'> {product.used}</span></p>

                            <div className='flex justify-between pt-2 pb-5'>
                                <p className='font-bold text-lg'>Price: <span className='font-semibold text-lg
                                 text-[#2666CF]'>${product.price}</span></p>
                            </div>
                            <div className="flex items-center justify-center ">
                                <Link to={`/category/${product.categoryId}`}> <button className="btn  btn-primary text-white">View Details</button></Link>
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