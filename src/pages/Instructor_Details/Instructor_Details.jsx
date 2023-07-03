//eslint-disable-next-line
import React from 'react';
import useInstructor from '../../../Hooks/useInstructor';
import LazyLoad from 'react-lazy-load';


const Instructor_Details = () => {
    const [instructors] = useInstructor()
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
            instructors.map(instructor => <div key={instructor._id} className="">
             <div className="w-[] mt-[7.7em] bg-gradient-to-r from-neutral-300 via-gray-200 shadow-lg  ">
                <figure className="px-10 pt-10">
                    <LazyLoad>
                        {/* <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: Chef_Picture,
                                width:400,
                            },
                            largeImage: {
                                src:Chef_Picture,
                                width: 1200,
                                height: 1800
                            }
                        }} /> */}

                        <div className='flex justify-center'>
                        <img src={instructor.img_url} alt="Chef_Picture" className="rounded-xl h-[12em] md:h-[15em] " />
                        </div>
                    </LazyLoad>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{instructor.name}</h2>
                    <p>{instructor.email}</p>

                    <hr className='border-2 border-black w-[80%]' />
                   
                    
                </div>
            </div>
         </div>)
           }
        </div>
    );
};

export default Instructor_Details;