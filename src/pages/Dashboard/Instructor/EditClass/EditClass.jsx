//eslint-disable-next-line
import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../Provider/AuthProviders';




const EditClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user} = useContext(AuthContext)

const navigate = useNavigate();
const Loaded_Class = useLoaderData()
console.log(Loaded_Class._id);
const Handle_Update = (event) => {
    event.preventDefault();
    const Full_Form = event.target
    const name = Full_Form.class_name.value
    const image = Full_Form.class_image.value
    const price = Full_Form.price.value
    const available_seats = Full_Form.available_seats.value


    const Update_Class = {name , image , price , available_seats}
    console.log(Update_Class);

    axiosSecure.put(`/updateclass/${Loaded_Class._id}`, Update_Class)
    .then(data => {
        console.log('after posting new menu item', data.data);
        if (data.data.modifiedCount) {

            Swal.fire({
                title: 'success',
                text: 'Your Information Updated successfully!',
                icon: 'success',
                confirmButtonText: '❤️K',
              })
              
              navigate("/dashboard/myclasses")
          }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'please update at least 1 property!',
              })
          }    
    })



    }


    return (
        <div className='bg-white'>
            <div className=''>

                <div className='w-[73%] mx-auto my-6 text-blue-950 border border-black'>
                    <form onSubmit={Handle_Update} className='bg-[#f3f3f3]' action="">
            
                        <section className='flex'>
                            <div className='w-full'>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'> Name Of The Instructor</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={user?.displayName} readOnly name='instructor_name' id="instructor_name" type='text' required="required" placeholder='Enter Instructor Name' className=" bg-white cursor-not-allowed w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'> Name Of The Class</p>
                                    <p className='pt-1 md:pt-2'><input name='class_name' id="class_name" type='text' required="required" placeholder='Enter Class Name' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold '>Price</p>
                                    <p className='pt-1 md:pt-2'><input name='price' id="price" type='number' required="required" placeholder='Enter your Asking Price' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>

                            </div>
                            <div className='w-full'>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Instructor email</p>
                                    <p className='pt-1 md:pt-2'><input readOnly defaultValue={user?.email} name='instructor_email' id="instructor_email" type='text' required="required" placeholder='Enter Instructor Email' className=" bg-white w-full cursor-not-allowed py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>

                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Class Image</p>
                                    <p className=' md:pt-2 pt-1'><input name='class_image' id="class_image" type='text' required="required" placeholder='Enter Class Photo URL' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Seats are Available</p>
                                    <p className='pt-1 md:pt-2'><input name='available_seats' id="available_seats" type='number' required="required" placeholder='Enter Available Seats' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                            </div>
                        </section>

                        <div className='w-[90.4%] mx-auto pt-3 pb-2'>
                            <p className='pt-1 md:pt-2'><input type="submit" value="Add a Class" className=" text-black bg-[#4affb1] border-2 border-black rounded-md cursor-grab w-full py-2 md:py-[5.52px] pl-1 md:pl-2 text-[.65em] md:text-[1.3em]" /></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default EditClass;