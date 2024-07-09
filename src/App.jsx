import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import AdminPage from './dashboards/AdminPage';
import CandidatePage from './dashboards/CandidatePage';
import GuestPage from './dashboards/GuestPage';
import ManagerPage from './dashboards/ManagerPage';
import LoginComponent from './LoginComponent';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import UserManagementPage from './pages/UserManagementPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <LoginComponent />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/candidate" element={<CandidatePage />} />
          <Route path="/guest" element={<GuestPage />} />
          <Route path="/manager" element={<ManagerPage />} />
          <Route path="/usermanagement" element={<UserManagementPage />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
