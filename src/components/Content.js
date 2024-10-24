import React from "react";
import { useNavigate } from "react-router-dom";
import { GlowingButton } from "./GlowingButton";

const Content = () => {
  //const navigate = useNavigate  ===> Incorrect usage
  const navigate = useNavigate(); //Call useNavigate() to get the navigation function

  const callbackExample = () => {
    navigate("./callbackExample");
  };

  return (
    <div className="flex flex-wrap items-center justify-center  min-h-screen bg-black">
      <h1>Welcome to The Functionality of React </h1>
      <GlowingButton
        color="green"
        name="Callback Concept"
        onClick={callbackExample}
      />
      <GlowingButton color="red" name="useContext Concept" />
    </div>
  );
};

export default Content;
