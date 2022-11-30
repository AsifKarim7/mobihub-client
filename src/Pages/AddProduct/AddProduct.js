import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const AddProduct = () => {

    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const navigate = useNavigate();



    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;

        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;
        const name = form.name.value;
        const categoryId = form.categoryId.value;
        const title = form.title.value;
        const used = form.used.value;
        const condition = form.condition.value;
        const location = form.location.value;
        const postedDate = form.postedDate.value;
        const originalPrice = form.originalPrice.value;
        const product = {
            img,
            price,
            description,
            seller: displayName,
            email,
            name,
            categoryId,
            title,
            used,
            condition,
            location,
            postedDate,
            originalPrice
        }
        fetch('https://mobihub-server-ecru.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('product added sucessfully')
                    navigate('/dashboard/myproducts')
                }
            })
            .catch(error => console.error(error));


    }

    return (
        <div className="flex items-center justify-center flex-col lg:flex-row p-12 max-w-screen-xl mx-auto " >

            <div className="mx-auto w-full max-w-auto px-8 bg-[#DEF6FF] ">
                <h2 className='text-5xl text-center font-bold my-10 text-[#2666CF]'>Add Products</h2>
                <form onSubmit={handleAddProduct} className='my-20 '  >


                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                        <div className="mb-5">
                            <label className="mb-3 block text-xl font-semibold text-[#2666CF]">Seller Name</label>
                            <input type="text" name="seller" value={displayName} disabled placeholder="Seller Name" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                        </div>
                        <div className="mb-5">
                            <label className="mb-3 block text-xl font-semibold text-[#2666CF]">Seller Email</label>
                            <input type="email" name="sellerEmail" value={email} disabled placeholder="Seller Email" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                        </div>
                        <div className="mb-5">
                            <label className="mb-3 block text-xl font-semibold text-[#2666CF]">Product Name</label>
                            <input type="text" name="name" placeholder="Enter Name" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                        </div>
                        <div className="mb-5">
                            <label className="mb-3 block text-xl font-semibold text-[#2666CF]">Location</label>
                            <input type="text" name="location" placeholder="Your Location" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                        </div>

                        <div className="mb-5">
                            <label className="mb-3 block text-xl font-semibold text-[#2666CF]">Category ID (Iphone = 1, Samsung = 2, Xiaomi = 3)</label>
                            <input type="text" name="categoryId" placeholder="Category Id" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                        </div>

                        <div className="mb-5">
                            <label className="mb-3 block text-xl font-semibold text-[#2666CF]">Resale Price</label>
                            <input type="text" name="price" placeholder="Resale Price" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                        </div>

                        <div className="mb-5">
                            <label className="mb-3 block text-xl font-semibold text-[#2666CF]">Original Price</label>
                            <input type="text" name="originalPrice" placeholder="Original Price" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                        </div>

                        <div className="mb-5">
                            <label className="mb-3 block text-xl font-semibold text-[#2666CF]">Used Time</label>
                            <input type="text" name="used" placeholder="How Long You've Used The Product" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                        </div>

                        <div className="mb-5">
                            <label className="mb-3 block text-xl font-semibold text-[#2666CF]">Product Condition</label>
                            <input type="text" name="condition" placeholder="Product Condition" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                        </div>

                        <div className="mb-5">
                            <label className="mb-3 block text-xl font-semibold text-[#2666CF]">ImageURL</label>
                            <input type="text" name="img" placeholder="ImageURL" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                        </div>

                        <div className="mb-5">
                            <label className="mb-3 block text-xl font-semibold text-[#2666CF]">Posting Date</label>
                            <input type="text" name="postedDate" placeholder="Posting Date" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                        </div>

                        <div className="mb-5">
                            <label className="mb-3 block text-xl font-semibold text-[#2666CF]">Description</label>
                            <textarea rows="5" name="description" placeholder="Type Here"
                                className="w-full resize-none rounded-md border border-slate-300 bg-white py-3 px-6 outline-none font-medium  focus:border-primary focus:shadow-md" required></textarea>
                        </div>

                    </div>



                    <div className='flex justify-center'>
                        <input type="submit" className="btn btn-primary rounded-md py-3 px-8 text-base font-semibold text-white outline-none" value="Add Service" />
                    </div>
                </form>
            </div >
        </div >
    );
};

export default AddProduct;