//eslint-disable-next-line
import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useCart from '../../../../../Hooks/useCart';

const SelectedClasses = () => {
    const [uesrs_own_cart, refetch] = useCart()
    console.log(uesrs_own_cart);
    console.log(uesrs_own_cart);
    const handle_delete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-12-kids-world-server.vercel.app/usercart/${_id}`, { method: "DELETE" },

                )
                    .then(res => res.json())
                    .then(delete_data => {
                        // console.log(delete_data);
                        if (delete_data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (

        <div>
            <table className='mt-[.4em] md:max-w-[1280px] mx-auto'>

                <caption>Selected Class</caption>

                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Class Name</th>
                        <th scope="col">Class Price</th>
                        <th scope="col">Pay</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        uesrs_own_cart.map(cart => <tr key={cart._id}>
                            <td className='flex justify-center py-1' data-label="Image"><img className='w-[70px] h-[70px] rounded-lg border-2 border-purple-400 shadow-lg shadow-purple-200' src={cart.class_image} alt="" /></td>
                            <td data-label="Class Name">{cart.class_name}</td>
                            <td data-label="Class Price">{cart.class_price}</td>
                            <td data-label="PAY"><Link  to={`/myPay/${cart._id}`}><button className= 'clip11 bg-slate-400 px-3 py-2 rounded-lg text-white' >PAYMENT</button></Link></td>
                            <td data-label="Delete"><button onClick={() => { handle_delete(cart._id) }} className='clip11 px-3 bg-slate-400 py-2 rounded-lg text-white' >Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default SelectedClasses;