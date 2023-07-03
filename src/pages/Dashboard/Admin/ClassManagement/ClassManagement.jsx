//eslint-disable-next-line
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ClassManagement.css'
import { MdEditSquare } from 'react-icons/md';

const ClassManagement = () => {
    const [ClassManage, setClassManage] = useState([])
    const navigate = useNavigate();
    const url = (`https://assignment-12-kids-world-server.vercel.app/art_class_Admin`)
    useEffect(() => {
        fetch(url,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('kids-world-access-token')}`,
                },
                // body: JSON.stringify(Logged_User_for_jwt),      
            }
        )
            .then(res => res.json())
            .then(ClassManage => {
                if (!ClassManage.error) {
                    setClassManage(ClassManage)

                } else {
                    navigate('/')
                }
            })
    }, [url, navigate])
    console.log(ClassManage);

    const handleConform = (_id) => {
        fetch(`https://assignment-12-kids-world-server.vercel.app/art_class/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = ClassManage.filter(ClassManag => ClassManag._id !== _id)
                    const updated = ClassManage.find(ClassManag => ClassManag._id === _id)
                    updated.status = 'confirm'
                    const newclass = [updated, ...remaining]
                    setClassManage(newclass)
                }
            })
    }

    const handleDeny = (_id) => {
        fetch(`https://assignment-12-kids-world-server.vercel.app/art_class/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'deny' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = ClassManage.filter(ClassManag => ClassManag._id !== _id)
                    const updated = ClassManage.find(ClassManag => ClassManag._id === _id)
                    updated.status = 'deny'
                    const newclass = [updated, ...remaining]
                    setClassManage(newclass)
                }
            })
    }
    return (
        <table className='mt-[em]'>
            <caption className='font-bold'>Manage Classes</caption>
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">Name of the Classes</th>
                    <th scope="col">Instructor name</th>
                    <th scope="col">Instructor email</th>
                    <th scope="col">Available seats</th>
                    <th scope="col">Price</th>
                    <th scope="col">Overall Status</th>
                    <th scope="col">Pending For Approval</th>
                    <th scope="col">Pending  deny</th>
                    <th scope="col">Send Feedback</th>
                </tr>
            </thead>
            <tbody>
                {
                    ClassManage.map(classes => <tr key={classes._id}>
                        <td data-label="Class Image"><img className='w-[70px] h-[70px] rounded-lg border-2 border-purple-400 shadow-lg shadow-purple-200' src={classes.image} alt="" /></td>
                        <td data-label="Class name">{classes.name}</td>
                        <td data-label="Instructor name">{classes.classes}</td>
                        <td className='text-[.8em]' data-label="Instructor email">{classes.instructor_email}</td>
                        <td data-label="Available seats">{classes.available_seats}</td>
                        <td data-label="Price">{classes.price}$</td>
                        <td data-label="Overall Status">
                            {
                                classes.status === 'confirm' || classes.status === 'deny' ? <span className='text-gray-400'>Process Complete</span> :
                                    <div className="text-red-500">Pending...</div>
                            }
                        </td>
                        <td data-label="Pending For Conformation">
                            {
                                classes.status === 'deny' ? <span className='text-gray-400'>Approve...</span> :


                                    classes.status === 'confirm' ? <span className='text-green-500'>Approved</span> :
                                        <div onClick={() => { handleConform(classes._id) }} className="text-red-500 cursor-pointer">Approve...</div>

                            }
                        </td>
                        <td data-label="Pending For Deny">
                            {
                                classes.status === 'confirm' ? <span className='text-gray-400'>Deny...</span> :

                                    classes.status === 'deny' ? <span className='text-green-500'>Denied</span> :
                                        <div onClick={() => { handleDeny(classes._id) }} className="text-red-500 cursor-pointer">Deny...</div>

                            }

                        </td>
                        <Link to={`/FeedBack/${classes._id}`}><td className='flex justify-center items-center pt-6 cursor-pointer ' data-label="Send Feedback" ><p><MdEditSquare></MdEditSquare></p></td></Link>
                        {/* <Link to = {`/Chackout/${Survice._id}`}><button className="btn btn-primary">Book Now</button></Link> */}

                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default ClassManagement;