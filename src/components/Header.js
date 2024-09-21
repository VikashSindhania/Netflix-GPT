import React from "react";
import { signOut } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then((data) => {
        // Sign-out successful.
        console.log("Sign-out successful", data);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("Error".error);
        navigate("/error");
      });
  };

  const handleformData = () => {
    navigate("/formData");
  };

  return (
    <div className=" w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <div>
        {" "}
        <button
          className="font-bold m-1 text-2xl text-white"
          onClick={handleformData}
        >
          Form
        </button>
      </div>

      <div className="flex p-1 ">
        <img
          className="h-20"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          alt="user-icon"
        />
        <button className="font-bold m-1" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
