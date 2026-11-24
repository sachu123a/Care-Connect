
import { Routes, Route, Navigate } from "react-router-dom";

// Public
import Home from "./Pages/Public/Home";
import About from "./Pages/Public/About";
import Services from "./Pages/Public/Services";
import Contact from "./Pages/Public/Contact";
import Login from "./Pages/Public/Login";
import Register from "./Pages/Public/Register";

// Admin 
import AdminLayout from "./Components/AdminLayout";
import AdminDashboard from "./Pages/Admin/Dashboard";
import AdminUsers from "./Pages/Admin/Users";
import AdminCaregivers from "./Pages/Admin/Caregivers";
import AdminElderly from "./Pages/Admin/Elderly";
import AdminAppointments from "./Pages/Admin/Appointments";
import Subscriptions from "./Pages/Admin/Subscriptions";

// Caregiver 
import Dashboard from "./Pages/Caregiver/Dashboard";
import CareSchedule from "./Pages/Caregiver/CareSchedule";
import MyElderly from "./Pages/Caregiver/MyElderly";
import Visits from "./Pages/Caregiver/Visits";
import Profile from "./Pages/Caregiver/Profile";

// Elderly 
import ElderlyLayout from "./Pages/Elderly/ElderlyLayout";

// Elderly 
import ElderlyDashboard from "./Pages/Elderly/Dashboard";
import ElderlyCareSchedule from "./Pages/Elderly/CareSchedule";
import HealthRecords from "./Pages/Elderly/HealthRecords";
import EmergencySOS from "./Pages/Elderly/Emergency";
import ElderlyAppointments from "./Pages/Elderly/Appointments";
import MyCaregivers from "./Pages/Elderly/MyCaregivers";
import Notifications from "./Pages/Elderly/Notifications";
import ElderlyProfile from "./Pages/Elderly/Profile";
import CarePlans from "./Pages/Elderly/CarePlans";

function App() {
  return (
    <Routes>

      {/* PUBLIC  */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ADMIN  */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="elderly" element={<AdminElderly />} />
        <Route path="caregivers" element={<AdminCaregivers />} />
        <Route path="appointments" element={<AdminAppointments />} />
        <Route path="subscriptions" element={<Subscriptions />} />
      </Route>

      {/* CAREGIVER */}
      <Route
        path="/caregiver"
        element={<Navigate to="/caregiver/dashboard" replace />}
      />

      <Route path="/caregiver/dashboard" element={<Dashboard />} />
      <Route path="/caregiver/schedule" element={<CareSchedule />} />
      <Route path="/caregiver/my-elderly" element={<MyElderly />} />
      <Route path="/caregiver/visits" element={<Visits />} />
      <Route path="/caregiver/profile" element={<Profile />} />

      {/* ELDERLY  */}
      <Route path="/elderly" element={<ElderlyLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<ElderlyDashboard />} />
        <Route path="schedule" element={<ElderlyCareSchedule />} />
        <Route path="health-records" element={<HealthRecords />} />
        <Route path="emergency" element={<EmergencySOS />} />
        <Route path="appointments" element={<ElderlyAppointments />} />
        <Route path="care-plans" element={<CarePlans />} />
        <Route path="caregivers" element={<MyCaregivers />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<ElderlyProfile />} />
      </Route>

      {/* DEFAULT  */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;
