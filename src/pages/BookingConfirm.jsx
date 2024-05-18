import { HeartIcon } from "../components/Icons";

const BookingConfirm = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div
        className="bg-gray-200 rounded-lg mt-10 flex justify-center"
        style={{
          top: "264px",
          left: "400px",
          width: "640px",
          height: "489px",
        }}
      >
        <div className="flex flex-col items-center mt-20">
          <div
            className="bg-white rounded-full shadow-custom flex justify-center items-center"
            style={{
              top: "320px",
              left: "656px",
              width: "129px",
              height: "129px",
            }}
          >
            <HeartIcon />
          </div>
          <p className="text-gray-900 text-2xl font-roboto font-semibold leading-42 text-center my-6">
            Your booking is now confirmed!
          </p>
          <p className="text-gray-900 text-sm font-roboto font-medium leading-6 text-center px-9 mb-12">
            Your appointment is confirmed and saved in your profile. You will
            receive a reminder before the scheduled time.
          </p>
          <button className="top-24 left-24 w-36 h-10 px-2 border-0 rounded-full bg-pink-600 text-white text-base font-roboto font-semibold leading-6 focus:outline-none">
            Back home
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirm;
