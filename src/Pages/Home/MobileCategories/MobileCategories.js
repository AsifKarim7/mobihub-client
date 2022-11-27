import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const MobileCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto md:pt-10 pb-6">
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>

        </div>
    );
};

export default MobileCategories;