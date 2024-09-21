import React from "react";
const FormData = () => {
  return (
    <div className="min-h-screen p-8">
      <div className=" text-center mb-6">
        <h1 className=" font-bold text-3xl  p-4 m-2">Registration Form</h1>
      </div>

      {/* Form Section */}
      <section>
        <form>
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
        </form>
      </section>
    </div>
  );
};

export default FormData;
