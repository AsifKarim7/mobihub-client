import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://mobihub-server-ecru.vercel.app/users?role=seller');
            const data = await res.json();
            return data;
        }

    });
    const handleAdmin = id => {
        fetch(`https://mobihub-server-ecru.vercel.app/users/admin/${id}`, {
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

    const handleDelete = _id => {
        const proceed = window.confirm('Do you want to delete this review?');
        if (proceed) {
            fetch(`https://mobihub-server-ecru.vercel.app/users/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('User Deleted!');
                        refetch()
                    }
                })
        }
    }

    return (
        <div className='my-12  md:max-w-screen-xl  mx-auto'>
            <div className="overflow-x-auto w-full mx-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete</th>

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
                                    {seller?.role !== 'admin' && <button onClick={() => handleAdmin(seller._id)} className="btn btn-info text-white btn-xs">Admin</button>}
                                </th>
                                <td>

                                    <button onClick={() => handleDelete(seller._id)} className="btn  btn-error btn-circle btn-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllSeller;