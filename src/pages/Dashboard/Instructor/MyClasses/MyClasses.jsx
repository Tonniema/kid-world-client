//eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { AiFillEdit } from 'react-icons/ai';
import { AuthContext } from '../../../../Provider/AuthProviders';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';


const MyClasses = () => {
  //   useTitle('My Toys')
  const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();

  console.log(user);

  const { data: Classes = [] } = useQuery(['Classes'], async () => {
    const res = await axiosSecure.get(`/myclasslist?email=${user?.email}`)
    return res.data;
  })
  const { data: feedbacks = [], } = useQuery(['feedbacks'], async () => {
    const res = await axiosSecure.get(`/myfeedback?email=${user?.email}`)
    return res.data;
  })

  return (

    <div>
      <table className='mt-[0em] md:max-w-[1280px] mx-auto'>
        <caption>My Class</caption>
        <thead>
          <tr>
            <th scope="col">Class Name</th>
            <th scope="col">Status</th>
            <th scope="col">Total Enrolled Students</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {
            Classes.map(instructor => <tr key={instructor._id}>
              <td  className='py-1' data-label="Class Name">{instructor.name + ' ' + ' ' + 'Art'}</td>
              <td data-label="Status">{instructor.status ? <p className='text-green-600'>{instructor.status + 'ed'}</p> : 'pending...'}</td>
              <td data-label="Total Enrolled Students">{instructor.enrolled ? instructor.enrolled : 0}</td>
              <td className='flex justify-center pt-1' data-label="Update"><Link  to={`/editclass/${instructor._id}`}><AiFillEdit className=' cursor-pointer rounded-sm bg-blue-400 text-[1.4em]'></AiFillEdit></Link></td>
            </tr>)
          }
        </tbody>
      </table>

      <table className='mt-[0em] md:max-w-[1280px] mx-auto'>
        <caption>Class Feedback</caption>
        <thead>
          <tr>
            <th scope="col">Class Name</th>
            <th  scope="col">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {
            feedbacks.map(feedback => <tr key={feedback._id}>
              <td className='py-1' data-label="Class Name">{feedback.name + ' ' + ' ' + 'Art'}</td>
              <td data-label="Feedback">{feedback.details ? feedback.details : ''}</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>

  );
};


export default MyClasses;