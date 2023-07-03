//eslint-disable-next-line
import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Slider from './Slider/Slider';
import Class from './Class/Class';
import Date_Countdown from './Date_Countdown/Date_Countdown';
import { FaRegSun } from 'react-icons/fa';
import { useState } from 'react';


const Home = () => {
    const [Lite, setLite] = useState(false);

    const LiDk = () => {
        setLite(!Lite);
      };
    return (
        <div className={` mx-auto ${Lite ? 'bg-black text-white' : 'bg-white'}`}>
            <p className={`fixed right-10 text-right top-10  z-10 font-bold`}>{Lite ? <FaRegSun onClick={LiDk} className='text-slate-500 text-[1.9em] cursor-pointer' /> : <FaRegSun onClick={LiDk} className='text-lime-500  text-[1.9em] cursor-pointer'/>}</p>
           <Navbar></Navbar>
           <Slider></Slider>
           <Class></Class>
           <Date_Countdown></Date_Countdown>
          
        </div>
    );
};

export default Home;