import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import BookingModal from './BookingModal';


const ProductCollection = () => {

    const products = useLoaderData();
    console.log(products);

    const [product, setProduct] = useState(null);

    return (
        <div>
            <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-3 my-10 max-w-screen-xl mx-auto'>
                {
                    products.map(products =>
                        <div key={products._id} products={products}>

                            <div className="card shadow-lg bg-white">

                                <img src={products.img} className="w-auto h-72 rounded-t-xl" alt="Album" />
                                <div className=" card-body h-[500px] px-4">
                                    <h2 className="text-xl font-bold pb-5 text-[#2666CF]">{products.name}</h2>
                                    <p> <span className='font-semibold text-lg'> Description :</span> {products.description}</p>
                                    <p> <span className='font-semibold text-lg'> Original Price:</span> ${products.originalPrice}</p>
                                    <p> <span className='font-semibold text-lg'> Product used :</span> {products.used}</p>
                                    <p> <span className='font-semibold text-lg'> Location: </span>{products.location}</p>
                                    <p> <span className='font-semibold text-lg'> Post Date: </span>{products.postedDate}</p>

                                    <div className='flex justify-between py-5'>


                                        <p className='font-bold text-lg '>Price :<span className='font-semibold text-lg text-[#2666CF]'> ${products.price}</span></p>
                                        <p className='font-bold text-end px-5'> <span className='font-semibold text-lg'>Condition :</span> {products.condition}</p>

                                    </div>

                                    <div className="flex justify-center">
                                        <label onClick={() => setProduct(products)} htmlFor="product-modal" className="btn btn-sm btn-primary text-white">Book Now</label>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
                {
                    product &&
                    <BookingModal
                        product={product}
                        setProduct={setProduct}
                    ></BookingModal>
                }
            </div >
        </div >
    );
};

export default ProductCollection;