import { useEffect, useState } from "react";
import { ChatState } from "../../context/ChatProvider";
import PatientData from "../components/PatientData";

const MedicalManager = () => {
  const [appointments, setAppointments] = useState([]);
  const { user } = ChatState();
  const defaultProps = {
    label: "One-Time",
    values: ["One-Time", "One-Week", "One-Month"],
  };

  const patientInformation = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      };

      const response = await fetch("/api/appointment", config);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setAppointments(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    patientInformation();
  }, []);

  return (
    <div className="min-h-screen bg-white grid grid-cols-4 space-x-1">
      {/* Left Column */}
      <div className="flex p-8 flex-col bg-gray-100 col-span-1">
        <p className="text-black text-base font-normal leading-5 mb-6">
          Dashboard
        </p>
        <p className="text-black text-base font-normal leading-5 mb-6">
          Appointments
        </p>
        <p className="text-black text-base font-normal leading- mb-65 mb-6">
          Patients
        </p>
        <p className="text-black text-base font-normal leading-5 mb-6">
          Reminders
        </p>
        <p className="text-black text-base font-normal leading-5 mb-6">
          Messages
        </p>
        <p className="text-black text-base font-normal leading-5 mb-6">
          Reports
        </p>
        <button className="cursor-pointer top-70 left-82 w-32 h-10 px-2 border-0 box-border rounded-full bg-pink-600 text-white text-base font-normal leading-5 outline-none">
          <p className="text-white text-base font-normal leading-5 text-center">
            Log Out
          </p>
        </button>
      </div>
      {/* Right Column */}
      <div className="flex flex-col bg-gray-100 col-span-3">
        <div className=" bg-white p-8 my-2 w-full rounded-3xl shadow-md">
          <h2 className="text-black mb-6 text-lg font-semibold leading-5">
            Patient Information
          </h2>
          <div className="flex flex-row space-x-6">
            {appointments?.map((appoint) => (
              <PatientData key={appoint._id} appoint={appoint} />
            ))}
          </div>
        </div>

        <div className=" bg-white p-8 my-2 w-full rounded-3xl shadow-md">
          <h2 className="text-black mb-6 text-lg font-semibold leading-5">
            Reminder Creation
          </h2>
          <input
            type="text"
            placeholder="Enter Reminder Message"
            className="w-full mb-6 h-[42px] px-2 border-0 box-border rounded-3xl shadow-md bg-white text-gray-500 text-base font-normal leading-5 outline-none"
          />
          <input
            type="text"
            placeholder="Additional Note"
            className="w-full mb-6 h-[42px] px-2 border-0 box-border rounded-3xl shadow-md bg-white text-gray-500 text-base font-normal leading-5 outline-none"
          />
          <select
            className="cursor-pointer mb-6 w-full h-[39px] px-2 border-0 box-border rounded shadow-md bg-white text-gray-500 text-base font-normal leading-5 outline-none"
            defaultValue=""
          >
            <option value="" disabled hidden>
              {defaultProps.label}
            </option>
            {defaultProps.values.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          <button className="cursor-pointer top-70 left-82 w-32 h-10 px-2 border-0 box-border rounded-full bg-pink-600 text-white text-base font-normal leading-5 outline-none">
            <p className="text-white text-base font-normal leading-5 text-center">
              Send Reminder
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalManager;
