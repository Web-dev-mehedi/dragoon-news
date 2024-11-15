import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
   const {signIn} = useContext(AuthContext)

  const handleSubmit=(e)=>{
      e.preventDefault();
      const form = new FormData(e.target)
      const email = form.get('email')
      const pass = form.get('password')
    // 
    signIn(email,pass)
  }
  return (
    <>
      <Navbar />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content w-full">
          <div className="card bg-base-100 w-6/12  shrink-0 shadow-2xl px-16 py-24">
          <h1 className=" text-center text-[#403F3F] text-3xl font-bold border-b border-[#E7E7E7] pb-8">Login your account</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label text-xl font-semibold text-[#403F3F]">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input bg-[#F3F3F3]"
                  required
                />
              </div>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#403F3F] text-white">Login</button>
              </div>
            </form>
            <div className="text-center">
              <span className="text-[#706F6F]">
                Dont’t Have An Account ?{" "}
                <strong className="text-red-600">
                  <Link to="/auth/register">Register</Link>
                </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
