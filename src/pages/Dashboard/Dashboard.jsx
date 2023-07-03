// import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Bars3Icon } from "@heroicons/react/24/outline";
import { SiGoogleclassroom } from 'react-icons/si';
import { ImUsers , ImAddressBook } from 'react-icons/im';
import { FaHome } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { FaBook } from 'react-icons/fa';
import { BiSelectMultiple } from 'react-icons/bi';
import { MdOutlineClass } from 'react-icons/md';
import { FaCcAmazonPay } from 'react-icons/fa';
import { MdLibraryAdd } from 'react-icons/md';
import Active_Link_For_Dashboard from '../../assets/Active_Link_For_Dashboard/Active_Link_For_Dashboard';
import useIsInstructor from '../../../Hooks/useIsInstructor';
import useAdmin from '../../../Hooks/useAdmin'

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [isInstructor] = useIsInstructor();
    const [isAdmin] = useAdmin();
    console.log(isInstructor);

    let content;

    if (isAdmin) {
        content = <section>
            <Active_Link_For_Dashboard to='/dashboard/home'> <div className='flex font-bold gap-x-2 items-center pb-4'><SiGoogleclassroom></SiGoogleclassroom><p>Manage Classes</p></div></Active_Link_For_Dashboard>
            <Active_Link_For_Dashboard to='/dashboard/UserManagement'> <div className='flex font-bold gap-x-2 items-center pb-3'><ImUsers></ImUsers><p>Manage Users</p></div></Active_Link_For_Dashboard>
        </section>;
    } else if (isInstructor) {
        content = <section>
            <Active_Link_For_Dashboard to='/dashboard/home'> <div className='flex font-bold gap-x-2 items-center'><MdLibraryAdd></MdLibraryAdd><p>Add a Class</p></div></Active_Link_For_Dashboard>
            <Active_Link_For_Dashboard to='/dashboard/myclasses'><div className='flex font-bold pt-2 pb-4 gap-x-2 items-center'><ImAddressBook></ImAddressBook><p>My Classes</p></div></Active_Link_For_Dashboard>
        </section>;
    } else {
        content = <section>
            <Active_Link_For_Dashboard to='/dashboard/home'> <div className='flex font-bold gap-x-2 items-center'><BiSelectMultiple></BiSelectMultiple><p>My Selected Classes</p></div></Active_Link_For_Dashboard>
            <Active_Link_For_Dashboard to='/dashboard/enrolledClasses'> <div className='flex font-bold gap-x-2 items-center py-2'><MdOutlineClass></MdOutlineClass><p>My Enrolled Classes</p></div></Active_Link_For_Dashboard>
            <Active_Link_For_Dashboard to='/dashboard/paymenthstory'> <div className='flex font-bold gap-x-2 items-center pb-4'><FaCcAmazonPay></FaCcAmazonPay><p>Payment History</p></div></Active_Link_For_Dashboard>
        </section>;
    }

    return (
        <section className='flex'>
            <nav
                //eslint-disable-next-line
                x-data="{ isOpen: false }"
                className="text-black md:w-[22%] md:bg-green-400 top-0 "
            >
                <div className=" mx-auto">
                    <div className="flex flex-col  justify-center">
                        <div className="flex flex-col-reverse">

                            <div className='text-white hidden'>
                                {/* <img className="md:w-[6.6875em] w-[3.9375em] "src={logo} alt=""/> */}
                                <p className='text-[1.2em] font-bold'>Kids World</p>
                                <p className='text-[.8em] italic'>Art School</p>
                            </div>

                            <div className="flex lg:hidden mt-[10px]">
                                <button
                                    onClick={() => {
                                        //eslint-disable-next-line
                                        setOpen(!open);
                                    }}
                                    type="button"
                                    className={`text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 `}
                                    aria-label="toggle menu"
                                >
                                    <Bars3Icon className="h-6 text-gray-500" />
                                </button>
                            </div>
                        </div>

                        <div className={`${open ? "translate-x-0 opacity-100 " : "opacity-0 -translate-x-full"} absolute inset-x-0 z-20 w-full px-6 py-2  md:bg-blue-400 transition-all duration-500 ease-in-out md:bg-transparent top-[44px]  md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0`}>
                            <div className='pl-8 py-7 h-screen'>
                                <div className='pb-11'>
                                    <p className='text-[1.7em] font-bold'>Kids World</p>
                                   <p className='tracking-[12px] font-semibold'>Art School</p>
                                </div>
                                <div>
                                    {content}
                                    <hr className='w-[81%] border' />
                                    <Active_Link_For_Dashboard to='/' ><div className='flex font-bold pt-8 gap-x-2 items-center'><FaHome></FaHome><p>HOME</p></div></Active_Link_For_Dashboard>
                                    <Active_Link_For_Dashboard to='/Instructors' ><div className='flex font-bold pt-7 gap-x-2 items-center'><GiTeacher></GiTeacher><p>INSTRUCTORS</p></div></Active_Link_For_Dashboard>
                                    <Active_Link_For_Dashboard to='/Dance_Class' ><div className='flex font-bold pt-7 gap-x-2 items-center'><FaBook></FaBook><p>CLASSES</p></div></Active_Link_For_Dashboard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section className='md:w-[76%] w-[100%]'>
                <Outlet></Outlet>
            </section>
        </section>
    );
};

export default Dashboard;

