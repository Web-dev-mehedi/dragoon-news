import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
   <>
      <h1 className='text-2xl font-semibold text-black py-8'>Find Us</h1>
   <div className="join flex join-vertical text-base font-medium text-[#706F6F] *:bg-white ">
      <button className="btn join-item  justify-start "><FaFacebook/>  Facebook</button>
      <button className="btn join-item justify-start"><FaTwitter/>  X</button>
      <button className="btn join-item justify-start"><FaInstagram/>  Instagram</button>
    </div>
   </>
  );
};

export default FindUs;
