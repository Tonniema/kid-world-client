import logo from '../../../assets/image/logo.webp'
import { BsCheckLg } from 'react-icons/bs';


const Footer = () => {
    return (
      <div className=''>
        <div className='flex flex-col md:flex-row px-9 pt-10 md:pt-20'>
          <div className='w-full md:w-[300px]'>
            <div className='flex items-center gap-x-2'>
            <img
              className="md:w-[14em] w-[9em] h-[2em] md:h-[3em] "
              src={logo}
              alt=""
            />
            <p className='text-black font-bold text-lg'></p>
            </div>
            <p className='mt-5 font-normal text-base text-black'><span className='font-bold'>KidsWorld</span> provides broad range of learning programs and activities thats unique in itself</p> <br></br>
            <p className='flex flex-row'><BsCheckLg style={{ color: "blue"}}> </BsCheckLg>Art Competition Programs</p>
            <p className='flex flex-row'><BsCheckLg style={{ color: "blue"}}> </BsCheckLg>Inter School Competitions</p>
            <p className='flex flex-row'><BsCheckLg style={{ color: "blue"}}> </BsCheckLg>Awards and Ceremony</p>
            
          </div>
          <div className='mt-5 md:ml-[100px] grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16'>
            
            
            <div className='w-full md:w-auto'>
              <h2 className='font-semibold text-3xl text-black'>Support</h2>
              <br></br>
              <p className='font-normal text-base text-black'>Help Desk</p>
              <p className='font-normal text-base text-black'>Sales</p>
              <p className='font-normal text-base text-black'>Become a Partner</p>
              <p className='font-normal text-base text-black'>Developers</p>
            </div>
            <div className='w-full md:w-auto'>
              <h2 className='font-semibold text-3xl text-black'>Contact</h2>
              <br></br>
              <p className='font-normal text-base text-black'>524 Broadway, NYC</p>
              <p className='font-normal text-base text-black'>+1 777-978-5570</p>
            </div>
            <div>
            
    <span className="font-semibold text-3xl text-black">Newsletter</span> 
    <br></br>
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Get latest updates, news, surveys & offers</span>
      </label> 
      <br></br>
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
    <img className='mt-5 pb-12' src="https://i.ibb.co/jZVR5PK/Group-9969.png" alt="" />
  </div>

  
          </div>
        </div>
        <hr className='w-[94%] mx-auto'></hr>
        <div className='footerSection flex justify-between px-4'>
          <p className='pt-10 md:pt-[50px] pb-10 md:pb-[100px] font-semibold text-sm text-black text-center md:text-left'>@2023 KidsWorld. All Rights Reserved</p>
          <p className='pt-10 md:pt-[50px] pb-10 md:pb-[100px] font-semibold text-sm text-black text-center md:text-left'>Powered by KidsWorld <span className='font-bold'></span></p>
        </div>
        
  
      </div>
    );
  };
  
  export default Footer;
  