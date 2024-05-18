import { Link } from "react-router-dom";

const SpecialistBooking = () => {
  return (
    <div className="mt-8  mb-16 bg-pink-100 p-8 rounded-lg text-center relative">
      <h2 className="text-2xl font-bold mb-4">Book Specialist</h2>
      <p>
        30-minute session with <span className="font-bold">$50</span> /session
      </p>
      <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded-lg">
        <Link to="/search-doctor">Book now</Link>
      </button>
      <div className="absolute top-0 right-0 m-4 bg-pink-600 text-white py-1 px-2 rounded-lg">
        Special
      </div>
    </div>
  );
};

export default SpecialistBooking;
