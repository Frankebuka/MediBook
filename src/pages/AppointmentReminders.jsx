import ReminderCard from "../components/ReminderCard";

const AppointmentReminders = () => {
  return (
    <div className="min-h-screen">
      <div className="top-12 left-20 md:left-64 h-96 bg-gray-200 rounded-xl pt-4">
        <div className="flex justify-center text-black text-2xl font-semibold leading-8">
          Patient Information
        </div>
        <ReminderCard />
      </div>
    </div>
  );
};

export default AppointmentReminders;
