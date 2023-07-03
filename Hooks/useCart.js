import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../src/Provider/AuthProviders';
import useAxiosSecure from './useAxiosSecure';


const useCart = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const {refetch,data: usercart = [] } = useQuery({
        queryKey: ['usercart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/usercart?email=${user.email} `
            )
            console.log("res from Axios", res);
            return res.data;
        }
    })
    return [usercart , refetch]
}

export default useCart;
