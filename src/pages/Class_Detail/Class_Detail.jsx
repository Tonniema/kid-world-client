//eslint-disable-next-line
import React from 'react';
import useClass from '../../../Hooks/useArtClass';

const Class_Detail = () => {
    const [art_classes] = useClass()
    return (
        <div className='grid grid-cols-1 justify-center md:grid-cols-3 gap-x-5 gap-y-8'>
            { 
            art_classes.map(art_class =><div className='pageBody' key={art_class._id}> 
            {/* <img className='h-[300px] w-[300px] img-style ' src={image} alt="" /> */}
            <div className='container-box'>
             <div className='box'>
                 <div className='imgBox'>
                     <img src={art_class.image} />
 
                 </div>
                 <div className='content'>
                     <p className='font-bold text-red-600 text-xl'>{art_class.name}</p>
                     <p className='font-semibold text-emerald-950'>{art_class.instructor}</p>
 
                 </div>
 
             </div>
 
            </div>
 
         </div> )

        }
        
        </div>
        
    );
};

export default Class_Detail;