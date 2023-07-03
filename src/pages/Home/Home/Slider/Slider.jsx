//eslint-disable-next-line
import React from 'react';
import'./Slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../assets/image/images123.jpg'
import img2 from '../../../../assets/image/image2.png'
import img3 from '../../../../assets/image/image3.png'
import img4 from '../../../../assets/image/image4.png'
import { Carousel } from 'react-responsive-carousel';
// import img2 from '../../../assets/local_Img/dance_Img_slider/dance_img_01.png'
// import img3 from '../../../assets/local_Img/dance_Img_slider/dance_img_02.png'
// import img4 from '../../../assets/local_Img/dance_Img_slider/dance_img_03.png'
// import { Carousel } from 'react-responsive-carousel';
const Slider = () => {
    return (
        <div>
             <section className='pt-28'>
                    <Carousel className='main-slide'>
                        <div>
                            <img className='h-[240px] md:h-[600px]' src={img1} />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                        <div>
                            <img className='h-[240px] md:h-[600px]' src={img2} />
                            {/* <p className="legend">Legend 2</p> */}
                        </div>
                        <div>
                            <img className='h-[240px] md:h-[600px]' src={img3} />
                            {/* <p className="legend">Legend 3</p> */}
                        </div>
                        <div>
                            <img className='h-[240px] md:h-[600px]' src={img4} />
                            {/* <p className="legend">Legend 3</p> */}
                        </div>
                    </Carousel>
                </section>
        </div>
    );
};


export default Slider;