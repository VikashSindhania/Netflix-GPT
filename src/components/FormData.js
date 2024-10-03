import React from "react";
const FormData = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", e.target);
  };
  return (
    <div className="min-h-screen p-8">
      <div className=" text-center mb-6">
        <h1 className=" font-bold text-3xl  p-4 m-2">Registration Form</h1>
      </div>

      {/* Form Section */}
      <section>
        <form onSubmit={handleSubmit}>
          <div className="text-end">
            <button
              type="submit"
              className="font-bold rounded p-3 m-2  bg-green-400"
            >
              Submit
            </button>
          </div>
          {/* Single Row with Two Inputs */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                FirstName
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="FirstName"
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>

            <div className="w-1/2">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                LastName
              </label>
              <input
                type="text"
                placeholder="LastName"
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
          </div>

          {/* Single Row with One Input  */}

          <div className="mb-4">
            <label className="font-bold block mb-2 text-sm" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          {/* Single Row with four Inputs */}
          <div className="flex space-x-4 mb-3">
            <div>
              <label>Salutation</label>
              <input
                id="salutation"
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div>
              <label>Gender</label>
              <input
                id="gender"
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div>
              <label>Country Code</label>
              <input
                id="country"
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div>
              <label>Maritial Status</label>
              <input
                id="maritialStatus"
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full shadow-lg"
              />
            </div>
          </div>

          {/* Single Row with four Inputs with defined Width */}
          <div className="flex space-x-4 shadow-md">
            <div className="w-1/4">
              <label>Salutation</label>
              <input
                id="salutation"
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="w-1/4">
              <label>Gender</label>
              <input
                id="gender"
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="w-1/4">
              <label>Country Code</label>
              <input
                id="country"
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="w-1/4">
              <label>Maritial Status</label>
              <input
                id="maritialStatus"
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
          </div>

          {/* Single Row with Two Inputs with defined Width */}
          <div className="flex space-x-4 ">
            <div className="w-1/4 ">
              <label>Salutation</label>
              <input
                id="salutation"
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full shadow-lg"
              />
            </div>
            <div className="w-1/4">
              <label>Gender</label>
              <input
                id="gender"
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
          </div>

          {/* Grid Column Span */}
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full">
              <label className="block mb-1">Salutation</label>
              <input
                id="salutation"
                type="text"
                placeholder="Salutation"
                className="border border-gray-300 p-2 w-full shadow-lg"
              />
            </div>
            <div className="w-full">
              <label className="block mb-1">Gender</label>
              <input
                id="gender"
                type="text"
                placeholder="Gender"
                className="border border-gray-300 p-2 shadow-lg w-full"
              />
            </div>
          </div>

          {/* Card UI  */}
          <div className="max-w-md mx-auto bg-blue-500 shadow-lg rounded-lg p-6 my-5 opacity-80">
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full">
                <label className="block mb-1">Salutation</label>
                <input
                  id="salutation"
                  type="text"
                  placeholder="Salutation"
                  className="border border-black p-2 w-full rounded-md shadow-lg"
                />
              </div>
              <div className="w-full">
                <label className="block mb-1">Gender</label>
                <input
                  id="gender"
                  type="text"
                  placeholder="Gender"
                  className="border border-gray-300 p-2 shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          <div className="m-2 p-2">
            <label
              htmlFor="countryCode"
              className="block text-sm font-bold mb-2"
            >
              Country Code:
            </label>
            <select
              id="countryCode"
              className="border border-gray-400 rounded p-2 w-full"
              defaultValue=""
            >
              <option value="" disabled>
                Select a Country Code
              </option>
              <option value="India">India</option>
              <option value="Singapore">Singapore</option>
              <option value="USA">USA</option>
            </select>
          </div>

          <div className="m-2 p-2">
            <p className="text-sm font-bold mb-2">Select Gender</p>
            <div>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="mr-2"
                />
                Female
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  className="mr-2"
                />
                other
              </label>
            </div>

            <div className="m-1 p-1">
              <label>Are You an Ex Servicemen:</label>
              <label className="ml-4">
                Yes: <input type="radio" name="X" value="yes" />
              </label>

              <label className="ml-4">
                No <input type="radio" name="X" value="no" />
              </label>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormData;
