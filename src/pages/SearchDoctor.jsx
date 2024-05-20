import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from "../components/Checkbox";
import { CalenderIcon, DoctorToolIcon, TimeIcon } from "../components/Icons";
import { ChatState } from "../../context/ChatProvider";

const SearchDoctor = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const [formData, setFormData] = useState({
    doctor: "",
    specialty: "",
    date: "",
    note: "",
  });

  const time =
    selectedTime == "Morning"
      ? "08:00 AM (Morning)"
      : selectedTime == "Afternoon"
      ? "12:00 PM (Afternoon)"
      : selectedTime == "Evening"
      ? "04:00 PM (Evening)"
      : "";

  const { user } = ChatState();
  const navigate = useNavigate();

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleReasonClick = (reason) => {
    setSelectedReason(reason);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTime) {
      alert("Please select a time.");
      return;
    }
    if (!selectedReason) {
      alert("Please select a reason.");
      return;
    }
    const dataToSend = {
      ...formData,
      time,
      reason: selectedReason,
    };
    try {
      const response = await fetch("/api/searchspecialist", {
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
      navigate("/doctor-appointment", { replace: true });
      console.log("Success:");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getTimeStyle = (time) => ({
    backgroundColor: selectedTime === time ? "rgba(241, 5, 116, 1)" : "white",
    color: selectedTime === time ? "white" : "#080a0b",
    width:
      time === "Afternoon" ? "205px" : time === "Evening" ? "129px" : "106px",
    height: "107px",
    cursor: "pointer",
    borderRadius: "2xl",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2",
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.08)",
    top: "382px",
    left:
      time === "Afternoon" ? "606px" : time === "Evening" ? "843px" : "468px",
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-lg mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="w-full h-64 p-4">
            <p className="text-[#080a0b] text-32px font-bold leading-10">
              Search
            </p>
            <div className="mt-8">
              <label className="text-[#080a0b] text-sm font-medium leading-6 my-4">
                Doctor&apos;s name
              </label>
              <input
                type="text"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                placeholder="Dr Henry Smith"
                required
                className="top-[264px] left-[732px] w-full py-1 px-4 border-0 box-border rounded-full shadow-md bg-white text-gray-400 text-sm font-medium leading-[18px] outline-none"
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <div className="mt-8">
                  <label className="text-[#080a0b] text-sm font-medium leading-6 my-4">
                    Specialty
                  </label>
                  <input
                    type="text"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    placeholder="Cardiologist"
                    required
                    className="top-[264px] left-[732px] w-full py-1 px-4 border-0 box-border rounded-full shadow-md bg-white text-gray-400 text-sm font-medium leading-[18px] outline-none"
                  />
                </div>
              </div>
              <div>
                <div className="mt-8">
                  <label className="text-[#080a0b] text-sm font-medium leading-6 my-4">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="01/15/2023"
                    required
                    className="top-[264px] left-[732px] w-full py-1 px-4 border-0 box-border rounded-full shadow-md bg-white text-gray-400 text-sm font-medium leading-[18px] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 h-auto">
            <h2 className="text-custom-color text-sm font-roboto font-bold leading-custom-line-height mb-3">
              Time
            </h2>
            <div className="flex space-x-4 mb-3">
              <div
                className="hover:bg-custom-gray rounded-2xl"
                style={getTimeStyle("Morning")}
                onClick={() => handleTimeClick("Morning")}
              >
                <DoctorToolIcon />
                <p className="text-base font-roboto font-bold leading-custom-line-height text-center">
                  Morning
                </p>
              </div>
              <div
                className="hover:bg-custom-gray rounded-2xl"
                style={getTimeStyle("Afternoon")}
                onClick={() => handleTimeClick("Afternoon")}
              >
                <CalenderIcon />
                <p className="text-base font-roboto font-medium leading-custom-line-height text-center">
                  Afternoon
                </p>
              </div>
              <div
                className="hover:bg-custom-gray rounded-2xl"
                style={getTimeStyle("Evening")}
                onClick={() => handleTimeClick("Evening")}
              >
                <TimeIcon />
                <p className="text-base font-roboto font-medium leading-custom-line-height text-center">
                  Evening
                </p>
              </div>
            </div>
            <h2 className="text-custom-color text-sm font-roboto font-bold leading-custom-line-height mb-3">
              Reason
            </h2>
            <div className="flex justify-between mx-4 mb-6">
              <div className="flex gap-2">
                <Checkbox
                  isChecked={selectedReason === "Routine checkup"}
                  onClick={() => handleReasonClick("Routine checkup")}
                />
                <p className="text-gray-900 text-sm font-roboto font-medium leading-5">
                  Routine checkup
                </p>
              </div>
              <div className="flex gap-2">
                <Checkbox
                  isChecked={selectedReason === "Emergency"}
                  onClick={() => handleReasonClick("Emergency")}
                />
                <p className="text-gray-900 text-sm font-roboto font-medium leading-5">
                  Emergency
                </p>
              </div>
              <div className="flex gap-2">
                <Checkbox
                  isChecked={selectedReason === "Allergy"}
                  onClick={() => handleReasonClick("Allergy")}
                />
                <p className="text-gray-900 text-sm font-roboto font-medium leading-5">
                  Allergy
                </p>
              </div>
            </div>
            <div className="mb-12">
              <label className="text-custom-color text-sm font-roboto font-bold leading-custom-line-height mb-3">
                Note
              </label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="Tell us any specific health concern"
                required
                className="top-[264px] left-[732px] h-16 w-full py-1 px-4 mt-3 border-0 box-border shadow-md bg-white text-gray-400 text-sm font-medium leading-[18px] outline-none"
              />
            </div>
            <div className="flex justify-between items-center">
              <Link
                to="/"
                className="text-gray-700 text-sm font-roboto font-bold leading-6"
              >
                Clear form
              </Link>
              <button
                type="submit"
                className="top-24 left-24 w-48 h-10 px-2 border-0 rounded-full bg-pink-600 text-white text-sm font-roboto font-bold leading-6 focus:outline-none"
              >
                Book appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchDoctor;
