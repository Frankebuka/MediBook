const PatientData = ({ appoint }) => {
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
      <button className="cursor-pointer top-70 left-82 w-32 h-10 px-2 border-0 box-border rounded-full bg-pink-600 text-white text-base font-normal leading-5 outline-none">
        <p className="text-white text-base font-normal leading-5 text-center">
          Select Patient
        </p>
      </button>
    </div>
  );
};

export default PatientData;
