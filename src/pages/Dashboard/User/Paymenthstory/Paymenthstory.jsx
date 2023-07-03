import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Provider/AuthProviders';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const Paymenthstory = () => {
  const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();

  const { data: PAID = [], } = useQuery(['PAID'], async () => {
    const res = await axiosSecure.get(`/mypayment?email=${user?.email}`)
    return res.data;
  })
    return (
        <table className='mt-[4em] md:max-w-[1280px] mx-auto'>
        <caption> Payment History</caption>
        <thead>
          <tr>
          <th scope="col">Name Of Class</th>
            <th scope="col">Class Price</th>
            <th scope="col">Tranjection ID</th>
            <th scope="col">Date Of Payment</th>
         
          </tr>
        </thead>
        <tbody>
          {
            PAID.map(Pay => <tr key={Pay._id}>
                 <td data-label="Class Name">{Pay.class_name}</td>
              <td data-label="Class Price">{Pay.class_price}</td>
              <td className='break-words' data-label="Tranjection ID">{Pay.transactionId}</td>
              <td data-label="Date Of Payment">{Pay.date}</td>
           
            </tr>)
          }
        </tbody>
      </table>
    );
};


export default Paymenthstory;