//eslint-disable-next-line
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Provider/AuthProviders';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const EnrolledClasses = () => {
  const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();

  const { data: payment = [], } = useQuery(['payment'], async () => {
    const res = await axiosSecure.get(`/mypayment?email=${user?.email}`)
    return res.data;
  })
    return (
        <table className='mt-[4em] md:max-w-[1280px] mx-auto'>
        <caption>Enrolled Class</caption>
        <thead>
          <tr>
            <th scope="col">Class Name</th>
            <th scope="col">Class Price</th>
            <th scope="col">Date of Enrolment</th>
          </tr>
        </thead>
        <tbody>
          {
            payment.map(Pay => <tr key={Pay._id}>
              <td data-label="Class Name">{Pay.class_name}</td>
              <td data-label="Class Price">{Pay.class_price}</td>
              <td data-label="Enrolment Date">{Pay.date}</td>
            </tr>)
          }
        </tbody>
      </table>
    );
};


export default EnrolledClasses;