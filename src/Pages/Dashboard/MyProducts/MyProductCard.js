import React from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


const MyProductCard = ({ product, handleDelete }) => {

    const navigate = useNavigate();
    const { seller, name, img, price, condition, location, description, used, _id } = product;


    const handleAdvertise = id => {

        const advertisedProduct = {
            img,
            price,
            seller,
            name,
            condition,
            used
        }
        fetch('http://localhost:5000/advertisedProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(advertisedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('product advertised sucessfully')
                    navigate('/')
                }
            })
            .catch(error => console.error(error));
    }

    return (


        <div className="card shadow-lg bg-blue-100">
            <div className='flex justify-between py-5 px-5'>
                <h2 className='text-xl font-bold'>{seller}</h2>
                <p className='text-gray-600 font-semibold text-base'>{location}</p>
            </div>
            <img src={product.img} className="w-auto h-72" alt="Album" />
            <div className=" card-body px-4">
                <h2 className="text-xl font-bold pb-5 text-blue-500">{name}</h2>
                <p> <span className='font-semibold text-lg'> Description :</span> {description}.</p>
                <p> <span className='font-semibold text-lg'> Product used :</span> {used}.</p>

                <div className='flex justify-between py-5'>

                    <p className='font-bold text-lg text-blue-600'> <span className='font-semibold text-lg'>Price : </span>$ {price}</p>
                    <p className='font-bold text-end px-5'> <span className='font-semibold text-lg'>Condition :</span> {condition}</p>

                </div>


            </div>
            <div className='flex justify-end'>

                <button onClick={() => handleDelete(_id)} className="btn btn-ghost"> <AiFillDelete className='text-xl'></AiFillDelete></button>

                <button onClick={handleAdvertise} className="btn btn-ghost"> Advertisement </button>

            </div>
        </div>


    );
};

export default MyProductCard;