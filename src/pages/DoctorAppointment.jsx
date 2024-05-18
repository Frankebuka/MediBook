import { useState } from "react";

const DoctorAppointment = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [insuranceOption, setInsuranceOption] = useState(null);

  const options = [
    { id: 1, label: "Male" },
    { id: 2, label: "Female" },
    { id: 3, label: "Prefer not to disclose" },
  ];

  const chooseOption = [
    { id: 1, label: "Yes," },
    { id: 2, label: "No, thank you." },
  ];

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };

  const handleChange = (id) => {
    setInsuranceOption(id);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <p
        className="text-black text-5xl font-bold leading-13 text-center"
        style={{ fontFamily: "Roboto" }}
      >
        Doctor Appointment
      </p>

      <p className="text-gray-800 text-2xl font-bold leading-10 font-roboto mt-24">
        Patient Information
      </p>

      <p className="text-gray-600 mb-12 text-base font-roboto leading-6">
        Enter your personal details
      </p>
      <div className="flex justify-center">
        <form className="w-full  space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <div>
              <label className="text-black text-lg font-bold leading-7">
                Email Address
              </label>
              <input
                type="text"
                placeholder="your@email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <div>
              <label className="text-black text-lg font-bold leading-7">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+(XX) XX XX XX XX"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <div>
              <label className="text-black text-lg font-bold leading-7">
                Full Name
              </label>
              <input
                type="text"
                placeholder="First Last"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <div>
              <label className="text-black text-lg font-bold leading-7">
                Date of Birth
              </label>
              <input
                type="text"
                placeholder="MM/DD/YYYY"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <div>
              <label className="text-black text-lg font-bold leading-7">
                Nationality
              </label>
              <input
                type="text"
                placeholder="Country"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black text-lg font-bold leading-7">
                Gender
              </label>
              <div className="flex justify-between">
                {options.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center space-x-2 pt-4"
                  >
                    <input
                      type="radio"
                      name="options"
                      value={option.id}
                      checked={selectedOption === option.id}
                      onChange={() => handleOptionChange(option.id)}
                      className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-40 bg-gray-200 rounded-2xl pl-8">
            <p className="text-gray-800 text-2xl font-bold leading-10 font-roboto mt-24 pt-2">
              Travel Insurance Coverage
            </p>

            <label className="text-gray-600 mb-12 text-base font-roboto leading-6">
              Add insurance for $30.
            </label>

            <div className="flex space-x-6">
              {chooseOption.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center space-x-2 pt-4"
                >
                  <input
                    type="radio"
                    name="options"
                    value={option.id}
                    checked={insuranceOption === option.id}
                    onChange={() => handleChange(option.id)}
                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button className=" bg-pink-600 text-white py-2 px-4 rounded-lg">
            Book now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorAppointment;
