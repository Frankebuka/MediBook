import { Link } from "react-router-dom";

const AppointmentInfo = () => {
  return (
    <div className="flex justify-center mt-8 mb-16">
      <div className="bg-white p-4 rounded-lg shadow-lg flex space-x-4">
        <div>
          <h2 className="text-lg font-bold">Appointment</h2>
          <p>Clinic Name</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Appointment Date</h2>
          <p>01/09/2023 - 10/09/2023</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Patient Details</h2>
          <p>Personal Info</p>
        </div>
        <Link to="/medical-manager" className="flex items-center">
          <button className="bg-pink-600 text-white py-2 px-4 rounded-lg">
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppointmentInfo;
