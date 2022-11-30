import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { categoryId, img, title } = category;
    return (

        <div className="card bg-base-100 shadow-xl">
            <img src={img} className='w-full h-60 rounded-t-xl' alt="Movie" />
            <div className="card-body text-center">
                <h2 className="font-bold text-[#2666CF] text-3xl">{title}</h2>
                <p className='text-center py-2'>Click below to view the all <span className='lowercase'>{title}</span> products.</p>
                <div className="flex items-center justify-center">
                    <Link to={`/category/${categoryId}`}> <button className="btn btn-primary text-white">View Phones</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;