import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DoctorAppointment from "./pages/DoctorAppointment";
import AppointmentReminders from "./pages/AppointmentReminders";
import MedicalManager from "./pages/MedicalManager";
import PersonalInformation from "./pages/PersonalInformation";
import SearchDoctor from "./pages/SearchDoctor";
import MedicalHistory from "./pages/MedicalHistory";
import BookingConfirm from "./pages/BookingConfirm";
import { ChatProvider, ProtectedRoute } from "../context/ChatProvider";
import AppointmentDetails from "./pages/AppointmentDetails";

function App() {
  return (
    <BrowserRouter>
      <ChatProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/doctor-appointment" element={<DoctorAppointment />} />
            <Route
              path="/appointment-reminders"
              element={<AppointmentReminders />}
            />
            <Route path="/medical-manager" element={<MedicalManager />} />
            <Route
              path="/personal-information"
              element={<PersonalInformation />}
            />
            <Route path="/search-doctor" element={<SearchDoctor />} />
            <Route path="/medical-history" element={<MedicalHistory />} />
            <Route path="/booking-confirm" element={<BookingConfirm />} />
            <Route
              path="/appointment-details/:id"
              element={<AppointmentDetails />}
            />
          </Route>
        </Routes>
        <Footer />
      </ChatProvider>
    </BrowserRouter>
  );
}

export default App;
