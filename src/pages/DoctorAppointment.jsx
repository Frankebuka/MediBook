import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../../context/ChatProvider";

const DoctorAppointment = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [insuranceOption, setInsuranceOption] = useState(null);
  const [file, setFile] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    nationality: "",
  });

  const { fullName, email, phone, dob, nationality } = file;
  const navigate = useNavigate();
  const { user } = ChatState();

  const handleChange = (e) => {
    setFile({ ...file, [e.target.name]: e.target.value });
  };

  const options = [
    { id: 1, label: "Male" },
    { id: 2, label: "Female" },
    { id: 3, label: "Prefer not to disclose" },
  ];

  const chooseOption = [
    { id: 1, label: "Yes," },
    { id: 2, label: "No, thank you." },
  ];

  const handleChangeGender = (id) => {
    const selectedGender = options.find((option) => option.id === id).label;
    setSelectedOption(selectedGender);
  };

  const handleChangeInsurance = (id) => {
    const selectedInsurance = chooseOption.find(
      (option) => option.id === id
    ).label;
    setInsuranceOption(selectedInsurance);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...file,
      gender: selectedOption,
      insurance: insuranceOption,
    };

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await response.json();
      navigate("/booking-confirm", { replace: true });
      console.log("Success:");
    } catch (error) {
      console.error("Error:", error);
    }
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
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <div>
              <label className="text-black text-lg font-bold leading-7">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <div>
              <label className="text-black text-lg font-bold leading-7">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+(XX) XX XX XX XX"
                name="phone"
                value={phone}
                onChange={handleChange}
                required
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
                name="fullName"
                value={fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <div>
              <label className="text-black text-lg font-bold leading-7">
                Date of Birth
              </label>
              <input
                type="date"
                placeholder="MM/DD/YYYY"
                name="dob"
                value={dob}
                onChange={handleChange}
                required
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
                name="nationality"
                value={nationality}
                onChange={handleChange}
                required
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
                      name="gender"
                      value={option.label}
                      checked={selectedOption === option.label}
                      onChange={() => handleChangeGender(option.id)}
                      required
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
                    name="insurance"
                    value={option.label}
                    checked={insuranceOption === option.label}
                    required
                    onChange={() => handleChangeInsurance(option.id)}
                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-pink-600 text-white py-2 px-4 rounded-lg"
          >
            Book now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorAppointment;
