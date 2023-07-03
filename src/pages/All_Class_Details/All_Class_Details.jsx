//eslint-disable-next-line
import React from 'react';
import useClass from '../../../Hooks/useArtClass';
import './All_Class_Details.css'
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';
import { useContext } from 'react';

const All_Class_Details = () => {
    const [art_classes] = useClass()
    console.log(art_classes)
    const { user } = useContext(AuthContext)
    const handle_AddToCart = (uesrs_cart) => {
        console.log(uesrs_cart);
        const cart = { Class_ID: uesrs_cart._id, email: user?.email, user_name: user?.displayName, instructor_name: uesrs_cart.instructor, class_name: uesrs_cart.name, class_image: uesrs_cart.image, class_price: uesrs_cart.price, available_seats: uesrs_cart.available_seats }

        if (user && user.email) {
            fetch("https://assignment-12-kids-world-server.vercel.app/usercart",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(cart),
                }
            )
                .then(res => res.json())
                .then(uesrs_cart => {
                    console.log(uesrs_cart);
                    if (uesrs_cart.insertedId) {
                        // refetch()
                        Swal.fire({
                            title: 'success',
                            text: 'Your Class added successfully!',
                            icon: 'success',
                            confirmButtonText: '❤️'
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Please Login To Select This Class',
                // text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    Navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <p className='font-bold text-center text-[1.8em] mt-[6em] pb-[1em]'>Our Classes</p>
            <div className='grid grid-cols-1 justify-center md:grid-cols-3 gap-x-5 gap-y-8 '>
                {
                    art_classes.map(art_class => <div className='pageBody' key={art_class._id}>
                        {/* <img className='h-[300px] w-[300px] img-style ' src={image} alt="" /> */}
                        <div className='container_box'>
                            <div className='box'>
                                <div className='imgBox'>
                                    <img src={art_class.image} />

                                </div>
                                <div className='content'>
                                    <p className='font-bold text-red-600 text-xl'>Class Name: {art_class.name}</p>
                                    <p className='font-semibold text-emerald-950'>Instructor: {art_class.instructor}</p>
                                    <p className='font-semibold text-emerald-950'>Price: ${art_class.price}</p>
                                    <p className='font-semibold text-emerald-950'>Available Seat: {art_class.available_seats}</p>
                                    <button onClick={() => handle_AddToCart(art_class)}>Add Class</button>

                                </div>


                            </div>

                        </div>

                    </div>)

                }

            </div>
        </div>
    );
};

export default All_Class_Details;