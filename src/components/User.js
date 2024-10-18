import React, { useState } from "react";
import axios from "axios";

const User = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    cityCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = formData;
    console.log("formData Submit", data);
    handleApi(data);
  };

  const handleApi = async (data) => {
    const response = await axios.post("http://localhost:5000/user", {
      data,
    });
    console.log("response", response);
  };

  return (
    <div className=" bg-gray-400 p-4 m-12 shadow-lg w-4/12 mx-auto rounded-lg  ">
      <h1 className="font-bold text-lg text-center mb-5">User Information</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="flex flex-col space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          {/* Age Input */}
          <div>
            <label htmlFor="age" className="block mb-1 font-bold">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={formData.age}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter your age"
            />
          </div>
          {/* City Input */}
          <div>
            <label htmlFor="city" className="block mb-1 font-bold">
              City
            </label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter your city"
            />
          </div>

          {/* City Code Input */}
          <div>
            <label htmlFor="cityCode" className="block mb-1 font-bold">
              City Code
            </label>
            <input
              type="text"
              id="cityCode"
              value={formData.cityCode}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter your city code"
            />
          </div>
          <div className="text-right">
            <button
              className="text-white font-bold bg-green-300 py-2 px-4 rounded hover:bg-green-500 transition m-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default User;
