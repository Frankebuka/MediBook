const MedicalHistory = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="text-gray-900 text-2xl font-roboto font-bold leading-28 my-10">
        Appointment History
      </div>
      <div
        className="bg-white rounded-lg shadow-custom w-full p-6"
        style={{
          top: "195px",
          left: "48px",
          height: "191px",
        }}
      >
        <p className="text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Date: June 12, 2021
        </p>
        <p className="text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Time: 10:30 AM
        </p>
        <p className="text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Specialist: Dr. Smith
        </p>
        <p className="text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Reason: Routine Checkup
        </p>
        <p className="text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          Notes: No specific concerns
        </p>
        <p className="text-gray-900 text-sm font-roboto font-normal leading-21 mb-1">
          View Details
        </p>
      </div>
    </div>
  );
};

export default MedicalHistory;
