import { Link } from "react-router-dom";
import Checkbox from "../components/Checkbox";
import { CalenderIcon, DoctorToolIcon, TimeIcon } from "../components/Icons";

const SearchDoctor = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-lg mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden">
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
              placeholder="Dr Henry Smith"
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
                  placeholder="Cardiologist"
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
                  type="text"
                  placeholder="01/15/2023"
                  className="top-[264px] left-[732px] w-full py-1 px-4 border-0 box-border rounded-full shadow-md bg-white text-gray-400 text-sm font-medium leading-[18px] outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 h-96">
          <h2 className="text-custom-color text-sm font-roboto font-bold leading-custom-line-height mb-3">
            Time
          </h2>

          <div className="flex space-x-4 mb-3">
            <div
              className="bg-custom-gray rounded-2xl flex flex-col justify-center items-center gap-2"
              style={{
                top: "382px",
                left: "468px",
                width: "106px",
                height: "107px",
              }}
            >
              <DoctorToolIcon />
              <p className="text-custom-black text-base font-roboto font-bold leading-custom-line-height text-center">
                Morning
              </p>
            </div>
            <div
              className="bg-white rounded-2xl shadow-custom flex flex-col justify-center items-center gap-2"
              style={{
                top: "382px",
                left: "606px",
                width: "205px",
                height: "107px",
              }}
            >
              <CalenderIcon />
              <p className="text-custom-gray-light text-base font-roboto font-medium leading-custom-line-height text-center">
                Afternoon
              </p>
            </div>
            <div
              className="bg-white rounded-2xl shadow-custom flex flex-col justify-center items-center gap-2"
              style={{
                top: "382px",
                left: "843px",
                width: "129px",
                height: "107px",
              }}
            >
              <TimeIcon />
              <p className="text-custom-gray-light text-base font-roboto font-medium leading-custom-line-height text-center">
                Evening
              </p>
            </div>
          </div>

          <h2 className="text-custom-color text-sm font-roboto font-bold leading-custom-line-height mb-3">
            Other
          </h2>
          <div className="flex space-x-6 mb-12">
            <div className="flex gap-2">
              <Checkbox />
              <p className="text-gray-900 text-sm font-roboto font-medium leading-5">
                Insurance
              </p>
            </div>
            <div className="flex gap-2">
              <Checkbox />
              <p className="text-gray-900 text-sm font-roboto font-medium leading-5">
                Medical history
              </p>
            </div>
            <div className="flex gap-2">
              <Checkbox />
              <p className="text-gray-900 text-sm font-roboto font-medium leading-5">
                Reason for visit
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-gray-700 text-sm font-roboto font-bold leading-6"
            >
              Clear form
            </Link>
            <button className="top-24 left-24 w-48 h-10 px-2 border-0 rounded-full bg-pink-600 text-white text-sm font-roboto font-bold leading-6 focus:outline-none">
              <Link to="/doctor-appointment">Book appointment</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDoctor;
