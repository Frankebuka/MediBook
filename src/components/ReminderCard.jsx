const ReminderCard = () => {
  return (
    <div className="relative grid grid-cols-5 mx-4 mt-4">
      <div className="col-span-1 flex justify-end pr-4">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyNXx8UG9ydHJhaXR8ZW58MXx8fHwxNjYwMjA1MDU1&ixlib=rb-1.2.1&q=80&w=1080"
          alt="image"
          className="w-12 h-12 rounded-full bg-cover bg-center"
        />
      </div>
      <div className="col-span-3">
        <p className="text-black text-sm font-bold leading-6">
          Patient: John Doe
        </p>
        <p className="text-black text-sm font-medium leading-6">
          Appointment - Tomorrow
        </p>
        <p className="text-black text-base font-medium leading-6">
          Reminder for tomorrows appointment
        </p>
        <div className="flex gap-4">
          <p className="text-black text-base font-bold leading-6">Confirm</p>
          <p className="text-black text-base font-bold leading-6">Cancel</p>
        </div>
      </div>
      <div className="flex col-span-1 gap-4">
        <p className="text-black text-sm font-medium leading-6">24h</p>
        <div className="top-20 left-64 w-3 h-3 bg-pink-600 rounded-full mt-1"></div>
      </div>
    </div>
  );
};

export default ReminderCard;
