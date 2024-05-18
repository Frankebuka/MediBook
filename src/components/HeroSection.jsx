import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-96"
      style={{
        backgroundImage:
          "url('https://assets.api.uizard.io/api/cdn/stream/280c693f-e4c6-4a34-a22c-df60e163f0af.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Book your appointment with ease
          </h1>
          <p>Manage your bookings</p>
          <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded-lg">
            <Link to="/search-doctor"> Book</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
