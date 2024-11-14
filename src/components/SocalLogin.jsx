import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGithubAlt, FaGoogle } from "react-icons/fa6";

const SocalLogin = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <button className="btn w-full bg-white border border-green-300" type="button">
        <FaGoogle /> <span>Login With Google</span>
      </button>
      {/*  */}
      <button className="btn w-full bg-white border border-gray-500" type="button">
        <FaGithubAlt /> <span>Login With Github</span>
      </button>
    </div>
  );
};

export default SocalLogin;
