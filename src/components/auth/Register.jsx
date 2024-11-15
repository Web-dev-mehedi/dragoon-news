import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

  const {createUserWithEmailPass, updateUserProfile} = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    // 
    setError({...error, name :"", password :""})
    e.preventDefault();

    // new mathood by using Form data to get value from input
    const form = new FormData(e.target)
    const name = form.get("name");
    if(name.length < 5){
      setError({...error, name : "name must be upto 5 charecter"});
      return
    }
    const url = form.get("url");
    const email = form.get("email");
    const password = form.get("password");
    if(password.length < 6){
      setError({...error, password : "password must be upto 6 charecter long"});
      return
    }
    createUserWithEmailPass(email,password)
    .then((result)=>{
     
      // 
      updateUserProfile({displayName : name, photoURL : url})
      .then(()=>{
         navigate("/auth/login");
      }).catch(err=>{
         console.log(err)
      });
      alert("register successfully");

   }).catch(err=>{
     alert("error",err)
   })
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full">
        <div className="card bg-base-100 w-6/12  shrink-0 shadow-2xl px-16 py-24">
          <h1 className=" text-center text-[#403F3F] text-3xl font-bold border-b border-[#E7E7E7] pb-8">
            Register your account
          </h1>
          <form onSubmit={handleSubmit} className="card-body">
            {/* name */}
            <div className="form-control">
              <label className="label text-xl font-semibold text-[#403F3F]">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Write your name"
                className="input bg-[#F3F3F3]"
                required
              />
            </div>
            {
              error.name &&  <label className="label text-xs font-semibold text-red-500">
                {error.name}
            </label>
            }
            {/* photo url */}
            <div className="form-control">
              <label className="label text-xl font-semibold text-[#403F3F]">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="url"
                placeholder="Enter your url link"
                className="input bg-[#F3F3F3]"
                required
              />
            </div>
            {/* email */}
            <div className="form-control">
              <label className="label text-xl font-semibold text-[#403F3F]">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input bg-[#F3F3F3]"
                required
              />
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label text-xl font-semibold text-[#403F3F]">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input bg-[#F3F3F3]"
                required
              />
            </div>
            {
              error.password &&  <label className="label text-xs font-semibold text-red-500">
                {error.password}
            </label>
            }
            {/* check box */}
            <div className="form-control">
              <label className="cursor-pointer label flex-row-reverse justify-end gap-5 ">
                <span className="label-text text-[#CFCFCF] ">Accept <strong className="text-[#706F6F]" >Term & Conditions</strong></span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox text-[#CFCFCF] "
                />
              </label>
            </div>
            {/*  */}
            <div className="form-control mt-6">
              <button className="btn bg-[#403F3F] text-white">Register</button>
            </div>
          </form>
          <div className="text-center">
            <span className="text-[#706F6F]">
              Have An Account ?{" "}
              <strong className="text-red-600">
                <Link to="/auth/login">Login</Link>
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
