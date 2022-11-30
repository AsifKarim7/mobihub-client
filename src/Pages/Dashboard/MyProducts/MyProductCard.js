import React from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


const MyProductCard = ({ product, handleDelete }) => {

    const navigate = useNavigate();
    const { seller, name, img, price, condition, location, description, used, _id, categoryId
    } = product;



    const handleAdvertise = id => {

        const advertisedProduct = {
            img,
            price,
            seller,
            name,
            condition,
            used,
            categoryId
        }
        fetch('https://mobihub-server-ecru.vercel.app/advertisedProduct', {
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


        <div className="card shadow-lg bg-white">
            <img src={product.img} className="w-auto h-72 rounded-t-xl" alt="Album" />

            <div className=" card-body h-[350px] px-4">
                <h2 className="text-xl font-bold pb-5 text-[#2666CF]">{name}</h2>
                <p> <span className='font-semibold text-lg'> Description :</span> {description}</p>
                <p> <span className='font-semibold text-lg'> Product used :</span> {used}</p>
                <p> <span className='font-semibold text-lg'>Location :</span> {location}</p>

                <div className='flex justify-between py-5'>

                    <p className='font-bold text-lg text-[#2666CF]'>Price :<span className='font-semibold text-lg'> ${price}</span></p>
                    <p className='font-bold text-end px-5'> <span className='font-semibold text-lg'>Condition :</span> {condition}</p>

                </div>


            </div>
            <div className='flex justify-end items-center pb-6'>

                <button onClick={handleAdvertise} className="btn btn-sm btn-primary text-white">Advertise Product</button>

                <button onClick={() => handleDelete(_id)} className="btn btn-ghost mx-2"> <AiFillDelete className='text-2xl'></AiFillDelete></button>

            </div>
        </div>


    );
};

export default MyProductCard;