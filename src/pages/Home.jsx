import SpecialistBooking from "../components/ SpecialistBooking";
import AppointmentInfo from "../components/AppointmentInfo";
import AppointmentTypes from "../components/AppointmentTypes";
import HeroSection from "../components/HeroSection";
import TopSpecialists from "../components/TopSpecialists";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AppointmentInfo />
      <AppointmentTypes />
      <SpecialistBooking />
      <TopSpecialists />
    </div>
  );
};

export default Home;
