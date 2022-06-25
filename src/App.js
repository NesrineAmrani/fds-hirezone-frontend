import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from './authentication/ProtectedRoutes';
import AuthUser from './authentication/AuthUser';
import SignIn from './pages/SignIn';
import Dashboard from "./pages/admin/Dashboard";
import ResetPassword from './pages/ResetPassword';
import Navbar from './components/admin/Navbar';
import Sidebar from './components/admin/Sidebar';

const App = () => {

  const loggedIn = window.localStorage.getItem("isLoggedIn");
  //const loggedIn = sessionStorage.getItem("isLoggedIn");

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
            }
          />

          <Route path="/login" element={<SignIn />} />
          <Route path="/recoverpassword" element={<ResetPassword />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
