const types = [
  { name: "General Check-up", icon: "🩺" },
  { name: "Cardiology Consultation", icon: "❤️" },
  { name: "Pulmonology Evaluation", icon: "🫁" },
  { name: "Neurology Consultation", icon: "🧠" },
  { name: "Vaccination Appointment", icon: "💉", highlighted: true },
  { name: "Dental Check-up", icon: "🦷" },
];

const AppointmentTypes = () => {
  return (
    <div className="mt-8 text-center  mb-16">
      <h2 className="text-2xl font-bold mb-8">Appointment Types</h2>
      <div className="grid grid-cols-3 gap-4 ">
        {types.map((type) => (
          <div
            key={type.name}
            className={`py-16 rounded-lg shadow-lg ${
              type.highlighted ? "bg-pink-600 text-white" : "bg-gray-100"
            }`}
          >
            <div className="text-4xl mb-2">{type.icon}</div>
            <p>{type.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentTypes;
