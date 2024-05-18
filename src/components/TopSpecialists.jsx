const specialists = [
  {
    name: "Dermatology",
    price: "100",
    image:
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxEb2N0b3IlMkMlMjBIb3NwaXRhbCUyQyUyMFN1cmdlcnl8ZW58MXx8fHwxNzE1NzU4NzU1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Pediatrics Consultation",
    price: "120",
    image:
      "https://images.unsplash.com/photo-1454944338482-a69bb95894af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxIZWFsdGglMkMlMjBXZWxsbmVzcyUyQyUyME1lZGljYWx8ZW58MXx8fHwxNzE1NzU4NzU2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Psychology",
    price: "80",
    image:
      "https://images.unsplash.com/photo-1624969862293-b749659ccc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxSZW1pbmRlciUyQyUyMENsb2NrJTJDJTIwQ2FsZW5kYXJ8ZW58MXx8fHwxNzE1NzU4NzU1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const TopSpecialists = () => {
  return (
    <div className="mt-8  mb-16 text-center">
      <h2 className="text-2xl font-bold mb-8">Top Specialists Available</h2>
      <div className="grid grid-cols-3 gap-4">
        {specialists.map((specialist) => (
          <div key={specialist.name} className="relative">
            <img
              src={specialist.image}
              alt={specialist.name}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 bg-pink-600 text-white py-2 px-4 rounded-tl-lg rounded-br-lg">
              <p>{specialist.name}</p>
              <p>at €{specialist.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSpecialists;
