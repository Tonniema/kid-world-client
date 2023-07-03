//eslint-disable-next-line
import React from 'react';

import { FaUserAstronaut ,  FaUsersCog , FaUserGraduate} from "react-icons/fa";
import { RiUserVoiceFill } from "react-icons/ri";
import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';


const UserManagement = () => {
    const [axiosSecure] = useAxiosSecure();
    const [isScaled0, setIsScaled0] = useState(false);
    
    const handleClick0 = () => {
        setIsScaled0(true);
        setTimeout(() => {
            setIsScaled0(false);
        }, 300); 
    };

    const { data: User_Data = [], refetch } = useQuery(['User_Data'], async () => {
        const res = await axiosSecure.get('/userInfo')
        return res.data;
    })

    const Make_Admin = (user) => {
        fetch(`https://assignment-12-kids-world-server.vercel.app/userInfo/admin/${user._id}`, {
            method: "PATCH",
            //   headers: {
            //     'content-type': 'application/json'
            //   },
            //   body: JSON.stringify({status: 'confirm'}) 
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    //update state
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,                                                                                
                        timer: 1000
                    })
                }
            })
    }

    const Make_Instructor = (user) => {
        fetch(`https://assignment-12-kids-world-server.vercel.app/userInfo/instructor/${user._id}`, {
            method: "PATCH",
            //   headers: {
            //     'content-type': 'application/json'
            //   },
            //   body: JSON.stringify({status: 'confirm'}) 
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    //update state
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor now`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }
    return (

        <table className='mt-[0em] md:max-w-[1280px] mx-auto'>
            <caption>Manage Users</caption>
            <thead>
                <tr>
                    <th scope="col">Name </th>
                    <th scope="col">Email</th>
                    <th scope="col">Make Admin</th>
                    <th scope="col">Make Instructor</th>
                </tr>
            </thead>
            <tbody>
                {
                    User_Data.map(user => <tr key={user._id}>
                        <td data-label="Name">{user.name}</td>
                        <td data-label="Email">{user.email}</td>
                        <td className='py-3' data-label="Make Admin">{
                            user.role === 'admin' ? <p className={`bg-gray-300 cursor-not-allowed py-3 w-[50px] mx-auto rounded-lg`}><button className='cursor-not-allowed'><FaUsersCog></FaUsersCog></button></p>: <p onClick={() => Make_Admin(user)}><p onClick={handleClick0} className={`${isScaled0 ? 'scale-105' : ''} duration-300 bg-[#D1A054] cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button><FaUserAstronaut></FaUserAstronaut></button></p></p>
                        }</td>
                        <td className='py-3' data-label="Make Instructor">{
                            user.role === 'instructor' ? <p className={`bg-gray-300 cursor-not-allowed py-3 w-[50px] mx-auto rounded-lg`}><button className='cursor-not-allowed'><FaUserGraduate></FaUserGraduate></button></p>: <p onClick={() => Make_Instructor(user)}><p onClick={handleClick0} className={`${isScaled0 ? 'scale-105' : ''} duration-300 bg-[#D1A054] cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button><RiUserVoiceFill></RiUserVoiceFill></button></p></p>
                        }</td>
                    </tr>)
                }
            </tbody>
        </table>
    );
};




export default UserManagement;