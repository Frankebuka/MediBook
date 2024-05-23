const PatientData = ({ appoint, handleSelect, selectedAppointmentId }) => {
  const isSelected = selectedAppointmentId === appoint._id;

  return (
    <div>
      <p className="text-black text-base font-normal leading-5">
        Name: {appoint.fullName}
      </p>
      <p className="text-black text-base font-normal leading-5">
        DOB: {appoint.dob}
      </p>
      <p className="text-black text-base font-normal leading-5">
        Gender: {appoint.gender}
      </p>
      <p className="text-black text-base font-normal leading-5">
        Contact: {appoint.phone}
      </p>
      <p className="text-black text-base font-normal leading-5">
        Nationality: {appoint.nationality}
      </p>
      <p className="text-black text-base font-normal mb-6 leading-5">
        Insurance: {appoint.insurance}
      </p>
      <button
        className={`cursor-pointer top-70 left-82 w-32 h-10 px-2 border-0 box-border rounded-full text-white text-base font-normal leading-5 outline-none ${
          isSelected ? "bg-gray-100" : "bg-pink-600"
        }`}
        onClick={() => handleSelect(appoint._id)}
      >
        <p className="text-base font-normal leading-5 text-center">
          Select Patient
        </p>
      </button>
    </div>
  );
};

export default PatientData;
