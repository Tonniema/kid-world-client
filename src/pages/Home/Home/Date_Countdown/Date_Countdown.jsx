//eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import "./Date_Countdown.css"
import rocket from '../../../../assets/image/rocket.png'

const Date_Countdown = () => {
    const countDownDate = new Date('July 30, 2023 00:00:00').getTime();
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeRemaining({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <div>
            <div className='containers'>
                <div className='text'>
                    <h1>We are <span>Starting </span>Soon...</h1>
                    <div className='launch-time'>
                        <div>
                        <p id="days">{timeRemaining.days}</p>
                        <span>Days</span>
                        </div>
                        <div>
                        <p id="hours">{timeRemaining.hours} </p>
                            <span>Hours</span>
                        </div>
                        <div>
                        <p id="minutes">{timeRemaining.minutes} </p>
                            <span>Minutes</span>
                        </div>
                        <div>
                        <p id="seconds">{timeRemaining.seconds} </p>
                            <span>Seconds</span>
                        </div>
                        
                    </div>
                    <div className='py-6'>
                    <code className='cursor-pointer text-white text-xl p-4 '>Learn More </code>
                    </div>
                    <img src={rocket} alt="" className='rocket' />

                </div>

            </div>


           


        </div>
    );
};

export default Date_Countdown;