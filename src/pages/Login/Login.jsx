//eslint-disable-next-line
import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { AuthContext } from '../../Provider/AuthProviders';
// ..
AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

const Login = () => {
    const [error_Message, set_error_Message] = useState('')
    const [success, set_success] = useState("")
    const email_REF = useRef();
    const { User_Login , Google_Login} = useContext(AuthContext)
    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    console.log(location);


    const Handle_Submit = (event) => {
        event.preventDefault();
        const Full_Form = event.target
        const email = Full_Form.email.value
        const password = Full_Form.password.value
        
        console.log(email, password);
        set_success("")
        set_error_Message("")

        User_Login(email, password)
            .then((userCredential) => {
                // Signed in 
                const Login_User = userCredential.user;
                console.log(Login_User);
                set_success("successfully logged in")
                // Navigate(from , {replace:true})
                // ...
                navigate(from, { replace: true })
            })
            .catch((error) => {
                //eslint-disable-next-line
                const errorCode = error.code;
                const errorMessage = error.message;
                set_error_Message(errorMessage)
            });
        // Full_Form.reset();
    }
    
    const Login_With_Google = () => {
        Google_Login()
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser);
            navigate(from, { replace: true });
        })
        .catch(err => set_error_Message(err.message));
      };
      
    
    return (
        <div data-aos="zoom-in">
            <section className='px-1 md:px-16 pt-2 md:pt-6 bg-[#f3f3f3] pb-14 bg-cover bg-no-repeat  bg-[url("https://thumbs.dreamstime.com/b/toy-bear-happy-birthday-banner-website-cute-vintage-concept-89137456.jpg")]'>
            <div>
                <div className='flex md:justify-end justify-center'>
                <div className='w-[60%] '>
                    <form onSubmit={Handle_Submit} className='mt-7 bg-transparent border-2 border-black backdrop-blur-[2px] ' action="">
                        <p className='text-center text-black font-[1000] text-[.911em] pt-6 md:pt-10 pb-1 md:pb-7 md:text-[2em]'>Login Your Account</p>
                        <p className='pt-3'><hr className=' w-[92%] border-[.1px] border-[#e7e7e7] mx-auto' /></p>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[1.3em] text-[.85em] font-bold text-black'>Email address</p>
                            <p className='pt-1 md:pt-2'><input ref={email_REF} name='email' id="email" type='email' required="required" placeholder='Enter your Email address' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[1.3em] text-[.85em] font-semibold'>Password</p>
                            <p className='pt-1 md:pt-2'><input name='password' id="password" type='text' required="required" placeholder='Enter your Password' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>


                        <div className='w-[80%] mx-auto pt-3 pb-2'>
                            <p className='pt-1 md:pt-2'><input type="submit" value="Login" className=" bg-slate-500 w-full py-2 md:py-[9px] pl-1 md:pl-2 text-[.65em] font-bold text-yellow-50 md:text-[1.3em]" /></p>
                        </div>
                        {/* <div className='w-[80%] mx-auto pt-2 md:pb-2 pb-1'>
                            
                            <button onClick={Password_Forget} className=' md:text-[1em] hover:text-blue-500 pt-1 text-[.55em] link'>Forget Password</button>
                        </div> */}
                        <div className='flex flex-col md:flex-row px-5 md:px-0 gap-x-3 justify-center cursor-grab'>
                            <div className='border-[1.4px] border-blue-500 flex justify-center md:py-2 md:px-2 px-1 py-1  rounded-[5px] mt-2'>
                                <div className='flex items-center gap-x-2 mx-[2px] md:mx-0'><svg fill="blue" className='md:w-[20px] w-[15px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg> <button onClick={Login_With_Google} className='text-[.6em] font-[700] md:font-normal md:text-[.9em] text-blue-900'>Login With Google</button> </div>
                            </div>
                            
                        </div>
                        <p className='text-center md:text-[1em] text-[.55em] py-2 text-blue-800'>Dont Have An Account ? <Link className='text-[1.1em] font-bold text-slate-950 hover:text-blue-500  underline ' to="/Register">Register</Link></p>
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

export default Login;
