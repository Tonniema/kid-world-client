//eslint-disable-next-line
import React, { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProviders';

const Register = () => {
   
    const [error_Message, set_error_Message] = useState('')
    const [success, set_success] = useState("")
    
    const { Create_User} = useContext(AuthContext)
    // const [passwordShown, setPasswordShown] = useState(false);
    // const [passwordShown0, setPasswordShown0] = useState(false);

const navigate = useNavigate()
    

    const location = useLocation()
    // const from = location.state?.from?.pathname || '/';
    console.log(location);

    const Handle_Submit = (event) => {
        event.preventDefault();
        set_success("")
        const Full_Form = event.target
        const name = Full_Form.name.value
        const email = Full_Form.email.value
        const password = Full_Form.password.value
        const conf = Full_Form.conf.value
     
    // const img_url = img_data.data.display_url
        // console.log(name, email, password);
        set_error_Message("")

        //VALIDATION
        if (!/(?=.*[A-Z])/.test(password)) {
            set_error_Message("Please at least set one uppercase later of your password")
            return;
        } else if (!/(?=.*[0-9])/.test(password)) {
            set_error_Message("Please at least set one numerical number of your password")
            return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
            set_error_Message("Please at least set one special case letter [?,=,*,!,@,#,$,&,] of your password")
            return;
        } else if (!/.{6}/.test(password)) {
            set_error_Message("Please Ensure the length of your password is 6.")
            return;
        }

        if (password !==conf) {
            set_error_Message("Your Password & Conform Password Is Not Match.Please Enter Correct Password In Those Field")
            return;
        }
           
           const image = Full_Form.image.files[0]
           const Form_Data = new FormData()
           Form_Data.append('image', image)
           const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`
           fetch(url, {
               method: 'POST',
               body: Form_Data,
           })
               .then(res => res.json())
               .then(img_data => {
                   console.log(img_data.data.display_url)
                   const img_url = img_data.data.display_url
           

                   Create_User(email, password)
                   .then((userCredential) => {
                       // Signed In
                       const user = userCredential.user;
                       console.log(user);
                       set_error_Message("")
                       // event.target.reset()
                       set_success("User has been created successfully")
                       updateProfile(user, {
                           displayName: name,
                           photoURL: img_url
                         })

                       .then(() => {
                           const user_secret_info = {name , email , password , img_url}
                            fetch("https://assignment-12-kids-world-server.vercel.app/userInfo",
                            {
                                method: "POST",
                                headers: { 
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(user_secret_info),
                            }
                        )
                            .then(res => res.json())
                            .then(user_secret_info => {
                                console.log(user_secret_info);
                                if (user_secret_info.insertedId) {
                                    Swal.fire({
                                        title: 'success',
                                        text: 'User has been created successfully!',
                                        icon: 'success',
                                        confirmButtonText: '🥰K',
                                      })
                                      navigate('/')
                                }
                            })
                        })
       
                    })

                   
                   .catch((error) => {
                       //eslint-disable-next-line
                       const errorCode = error.code;
                       const errorMessage = error.message;
                       set_error_Message(errorMessage)
                       // ..
                   });
               })
               .catch(err => console.log(err.message))
           
// console.log(name , email , password);
        Full_Form.reset();
    }

    // const togglePassword = () => {
    //     setPasswordShown(!passwordShown);
    //   };
    // const togglePassword0 = () => {
    //     setPasswordShown0(!passwordShown0);
    //   };

    
    return (
        <div className='mt-[2em]'>
            <section className='px-1 md:px-16 pt-2 md:pt-6 bg-[#f3f3f3] pb-14 bg-no-repeat bg-cover  bg-[url("https://thumbs.dreamstime.com/b/toy-bear-happy-birthday-banner-website-cute-vintage-concept-89137456.jpg")]'>
            <div>
                <div className='flex md:justify-end justify-center'>
                <div className='w-[60%] '>
                    <form onSubmit={Handle_Submit} className='mt-7 bg-transparent border-2 border-black backdrop-blur-[2px] ' action="">
                        <p className='text-center text-black font-[1000] text-[.911em] pt-6 md:pt-10 pb-1 md:pb-7 md:text-[2em]'>Register your account</p>
                        <p className='pt-3'><hr className=' w-[92%] border-[.1px] border-[#e7e7e7] mx-auto' /></p>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[1.3em] text-[.85em] font-bold text-black'>Email address</p>
                            <p className='pt-1 md:pt-2'><input name='email' id="email" type='email' required="required" placeholder='Enter Your Email address' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[1.3em] text-[.85em] font-semibold'>User Name</p>
                            <p className='pt-1 md:pt-2'><input name='name' id="name" type='text' required="required" placeholder='Enter Your User Name' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>
                        <div className='w-[80%] mx-auto pt-3'>
                                <p className='md:text-[.94em] text-[.85em] font-semibold'>Profile </p>
                                <p className='pt-1 md:pt-2'><input name='image' id="image" type='file' accept='image/*' className=" rounded-md bg-red-500 bg-opacity-5 border border-[#c32629] w-full py-2 md:py-[12px] pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                            </div>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[1.3em] text-[.85em] font-semibold'>Password</p>
                            <p className='pt-1 md:pt-2'><input name='password' id="password" type='text' required="required" placeholder='Enter your Password' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[1.3em] text-[.85em] font-semibold'>Confirm Password</p>
                            <p className='pt-1 md:pt-2'><input name='conf' id="conf" type='text' required="required" placeholder='Enter your Password' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>


                        <div className='w-[80%] mx-auto pt-3 pb-2'>
                            <p className='pt-1 md:pt-2'><input type="submit" value="Submit" className=" bg-slate-500 w-full py-2 md:py-[9px] pl-1 md:pl-2 text-[.65em] font-bold text-yellow-50 md:text-[1.3em]" /></p>
                        </div>
                        
                        <p className='text-center'>{error_Message}</p>
                        <p className='text-center'>{success}</p>
                    </form>
                </div>
                </div>
            </div>
        </section>
        </div>
    );
};



export default Register;