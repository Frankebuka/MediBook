import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChatState } from "../../context/ChatProvider";

const AppointmentDetails = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);
  const { user } = ChatState();

  const fetchAppointmentDetails = async () => {
    try {
      const response = await fetch(`/api/searchspecialist/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setAppointment(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchAppointmentDetails();
  }, [id]);

  if (!appointment) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="text-gray-900 text-2xl font-roboto font-bold leading-28 my-10">
        Appointment Details
      </div>
      <div className="bg-white rounded-lg shadow-custom w-full p-6">
        <div className="flex gap-10 text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Date: <p>{appointment.date}</p>
        </div>
        <div className="flex gap-10 text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Time: <p>{appointment.time}</p>
        </div>
        <div className="flex gap-10 text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Doctor: <p>{appointment.doctor} </p>
        </div>
        <div className="flex gap-10 text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Specialist: <p>{appointment.specialty}</p>
        </div>
        <div className="flex gap-10 text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Reason: <p>{appointment.reason} </p>
        </div>
        <div className="flex gap-10 text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Notes: <p>{appointment.note} </p>
        </div>
        <div className="flex gap-10 text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Full Name: <p>{appointment.appointment.fullName} </p>
        </div>
        <div className="flex gap-10 text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Email: <p>{appointment.appointment.email} </p>
        </div>
        <div className="flex gap-10 text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Nationality: <p>{appointment.appointment.nationality} </p>
        </div>
        <div className="flex gap-10 text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Phone Number:<p> {appointment.appointment.phone} </p>
        </div>
        <div className="flex gap-10 text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Date of birth: <p>{appointment.appointment.dob} </p>
        </div>
        <div className="flex gap-10 text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Gender: <p>{appointment.appointment.gender} </p>
        </div>
        <div className="flex gap-10 text-gray-900 mb-4 text-sm font-roboto font-normal leading-21 mb-1">
          Insurance: <p>{appointment.appointment.insurance} </p>
        </div>

        <Link
          to="/medical-history"
          className="text-gray-900 text-md font-roboto font-bold leading-21 mb-1 cursor-pointer hover:underline"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default AppointmentDetails;
