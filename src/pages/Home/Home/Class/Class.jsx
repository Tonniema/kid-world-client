//eslint-disable-next-line
import React from 'react';
import useClass from '../../../../../Hooks/useArtClass';
import Class_Card from './Class_Card/Class_Card';
import './Class.css';
import { Link } from 'react-router-dom';

const Class = () => {
    const [art_classes] = useClass()
    console.log(art_classes)
    return (
        <div>
            <p className='font-bold text-center text-[1.8em] pb-3'>Our Classes</p>
            <div className='grid grid-cols-1 justify-center md:grid-cols-3 gap-x-5 gap-y-8'>
            {

                art_classes?.slice(0, 6).map(classes => <Class_Card
                    key={classes._id}
                    classes={classes}>

                </Class_Card>)

            }
            
        </div>
       <Link to="/classes">
       <div className='flex justify-center py-6'>
       <code style={{ "--c": "#373B44", "--b": "5px", "--s": "12px" }}>
                All Classes
            </code>
       </div></Link>
        </div>

    );
};

export default Class;