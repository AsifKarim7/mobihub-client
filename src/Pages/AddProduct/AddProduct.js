import React from 'react';
import toast from 'react-hot-toast';
import img1 from '../../assests/images/phones.png'

const AddProduct = () => {

    const handleAddProduct = event => {

    }

    return (
        <div className="flex items-center justify-center flex-col lg:flex-row p-12 max-w-screen-xl mx-auto" >
            {/* <div>
                <img className='w-2/4 mx-auto lg:w-3/5' src={img1} alt=''></img>
            </div> */}
            <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={handleAddProduct}>
                    <h2 className='text-5xl text-center font-bold my-10'>Add Products</h2>

                    <div className="mb-5">
                        <label className="mb-3 block text-lg">Product Name</label>
                        <input type="text" name="name" placeholder="Enter Name" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-lg">Category Name (Iphone, Samsung, Oneplus)</label>
                        <input type="text" name="title" placeholder="Enter Category Name" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-lg">Price</label>
                        <input type="text" name="price" placeholder="Enter Price" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-lg">ImageURL</label>
                        <input type="text" name="img" placeholder="Enter PhotoURL" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-lg">Price</label>
                        <input type="text" name="price" placeholder="Enter Price" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-lg">Details</label>
                        <textarea rows="5" name="details" placeholder="Enter Details"
                            className="w-full resize-none rounded-md border border-slate-300 bg-white py-3 px-6 outline-none font-medium  focus:border-primary focus:shadow-md" required></textarea>
                    </div>

                    <div>
                        <input type="submit" className="btn btn-primary rounded-md py-3 px-8 text-base font-semibold text-white outline-none" value="Add Service" />
                    </div>
                </form>
            </div >
        </div >
    );
};

export default AddProduct;