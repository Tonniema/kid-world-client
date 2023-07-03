import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../src/Provider/AuthProviders.jsx';
// import Swal from 'sweetalert2';


const axiosSecure = axios.create({
  baseURL: 'https://assignment-12-kids-world-server.vercel.app', 
});

const useAxiosSecure = () => {
  const { Log_Out } = useContext(AuthContext); 
  const navigate = useNavigate(); 



  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('kids-world-access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await Log_Out();
          // navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [Log_Out, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;