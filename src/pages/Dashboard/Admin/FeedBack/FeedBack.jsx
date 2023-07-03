//eslint-disable-next-line
import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FeedBack = () => {
    const navigate = useNavigate();
    const Feedback = useLoaderData()
    //eslint-disable-next-line
    const { _id, instructor, name, instructor_email, price } = Feedback

    const Handle_Feedback = (event) => {
        event.preventDefault();
        const Full_Form = event.target
        const details = Full_Form.details.value

        const feedbacks = {
            details,
            Class_Id: _id,
            instructor,

            instructor_email,
            price,
            name
        }
        console.log(feedbacks);

        fetch("https://assignment-12-kids-world-server.vercel.app/feedback",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(feedbacks),
            }
        )
            .then(res => res.json())
            .then(booking_data => {
                console.log(booking_data);
                if (booking_data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Feedback Sent successfully!',
                        icon: 'success',
                        confirmButtonText: '❤️',
                    })

                    navigate("/dashboard/Home")
                }
            })

    }
    return (

        <div className="w-[70%] mx-auto">
            <p className='text-center text-3xl font-semibold'>Welcome to Feedback page</p>
            <form onSubmit={Handle_Feedback} action="">
                <div className=' mx-auto pt-3'>
                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Your Feedback--</p>
                    <p className='pt-1 md:pt-2'>
                        <textarea rows="9" cols="50" name='details' id="details" type='text' className=" rounded-sm bg-[#] border-2 border-green-300 rounded-sm shadow-2xl shadow-green-300 w-full pl-1 md:pl-2 text-[.65em] md:text-[.85em]"></textarea></p>
                </div>
                <div className=" mt-6">
                    <div className='flex justify-center'><input className='border-2 border-blue-500 ' type="submit" value="SENT" name="" id="" /></div>
                </div>
            </form>
        </div>

    );
};

export default FeedBack;