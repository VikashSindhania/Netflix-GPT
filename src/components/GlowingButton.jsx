import React from "react";

export const GlowingButton = ({ color, name, onClick }) => {
  console.log("Glowing Button", onClick);
  return (
    <button
      className={`relative inline-flex items-center justify-center px-8 py-3 m-2 rounded-full text-white text-lg font-bold
                  bg-transparent border-2 border-[${color}] transition-all duration-300 ease-in-out
                  shadow-[0_0_20px_${color}] hover:bg-sky-700`}
      style={{
        boxShadow: `0 0 15px ${color}, 0 0 25px ${color}`,
      }}
      onClick={onClick}
    >
      {name}
      <span className="ml-2">➔</span>
    </button>
  );
};

//export default GlowingButton;

//Use PascalCase for React components, or lowercase for HTML elements.
export const TextButton = ({ name, onClick }) => {
  return (
    <button
      className="border border-green-500 text-cyan-500 bg-black-100 p-2 m-2 rounded shadow-lg"
      onClick={onClick}
    >
      {name}
    </button>
  );
};
