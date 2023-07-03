//eslint-disable-next-line
import React from 'react';
import './Class_Card.css'

const Class_Card = ({classes}) => {
    //eslint-disable-next-line
    const { name, instructor , available_seats , recipe, image, price } = classes
    return (
        <div className='pageBody'>
           
           <div className='container'>
            <div className='card'>
                <div className='imgBox'>
                    <img src={image} />

                </div>
                <div className='content'>
                    <p className='font-bold text-red-600 text-xl'>{name}</p>
                    <p className='font-semibold text-emerald-950'>{instructor}</p>

                </div>

            </div>

           </div>

        </div>
    );
};

export default Class_Card;