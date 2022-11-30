import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `https://mobihub-server-ecru.vercel.app/orders?email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='my-12  md:max-w-screen-xl  mx-auto'>

            <div className="overflow-x-auto w-full mx-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders.map((order, i) => <tr key={order._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <td className='border-none'>{i + 1}</td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={order.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {order.name}
                                </td>
                                <td>{order.price}</td>
                                <td>
                                    {
                                        order.price && !order.paid && <Link
                                            to={`/dashboard/payment/${order._id}`}
                                        >
                                            <button
                                                className='btn btn-primary text-white btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        order.price && order.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default MyOrders;