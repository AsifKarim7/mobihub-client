import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=seller');
            const data = await res.json();
            return data;
        }

    });
    const handleAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin Role Created')
                    refetch();
                };
            })
    }

    return (
        <div>
            <h2 className='text-3xl'>All Sellers</h2>

            <div className="overflow-x-auto w-full mx-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>

                            </th>


                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify Seller</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <td>
                                    <th>{i + 1}</th>
                                </td>
                                <td>
                                    {seller.name}
                                </td>
                                <td>{seller.email}</td>
                                <th>
                                    {seller?.role !== 'admin' && <button onClick={() => handleAdmin(seller._id)} className="btn btn-success text-white btn-xs">Verify</button>}
                                </th>
                                <th>

                                    <button className="btn  btn-error btn-circle btn-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllSeller;