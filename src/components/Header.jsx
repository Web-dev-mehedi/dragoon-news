import React from 'react';
import logo from "../assets/image/logo.png"
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5'>
             <figure className='w-96'>
                  <img src={logo} alt="logo" />
             </figure>
              <div>
                  <p className='text-lg text-[#706F6F] font-light'>Journalism Without Fear or Favour</p>
              </div>
              <div className='text-lg text-[#706F6F] font-normal'>
                    {
                        moment().format('dddd , MMMM D , YYYY')
                    }
              </div>
        </div>
    );
};

export default Header;