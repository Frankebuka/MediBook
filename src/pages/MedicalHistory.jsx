import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../../context/ChatProvider";

const MedicalHistory = () => {
  const [appointments, setAppointments] = useState([]);
  const { user, setFetchAgain, fetchAgain } = ChatState();
  const navigate = useNavigate();

  const patientInformation = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      };

      const response = await fetch("/api/searchspecialist", config);

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
  }, [fetchAgain]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/searchspecialist/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      await res.json();
      setFetchAgain(!fetchAgain);
    } catch (error) {
      console.log(error);
    }
  };

  const handleView = (id) => {
    navigate(`/appointment-details/${id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="text-gray-900 text-2xl font-roboto font-bold leading-28 my-10">
        Appointment History
      </div>
      <div className="flex flex-col gap-3">
        {appointments && appointments.length > 0 ? (
          appointments.map((appoint) => {
            return (
              <div
                key={appoint._id}
                className="bg-white rounded-lg shadow-custom w-full p-6"
                style={{
                  top: "195px",
                  left: "48px",
                  height: "191px",
                }}
              >
                <p className="text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
                  Date: {appoint.date}
                </p>
                <p className="text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
                  Time: {appoint.time}
                </p>
                <p className="text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
                  Specialist: {appoint.specialty}
                </p>
                <p className="text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
                  Reason: {appoint.reason}
                </p>
                <p className="text-gray-900 text-sm font-roboto font-normal mb-3 leading-21 mb-1">
                  Notes: {appoint.note}
                </p>
                <div className="flex flex-row space-x-4">
                  <p
                    onClick={() => handleView(appoint._id)}
                    className="text-gray-900 text-sm font-roboto font-normal leading-21 mb-1 cursor-pointer hover:underline"
                  >
                    View
                  </p>
                  <p
                    onClick={() => handleDelete(appoint._id)}
                    className="text-gray-900 text-sm font-roboto font-normal leading-21 mb-1 cursor-pointer hover:underline"
                  >
                    Delete
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-900 text-2xl font-roboto font-bold leading-28 my-10">
            No History
          </p>
        )}
      </div>
    </div>
  );
};

export default MedicalHistory;
