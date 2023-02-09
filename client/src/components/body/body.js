import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ActivationEmail from "./auth/ActivationEmail";
import NotFound from "../utils/NotFound/NotFound";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import Profile from "./profile/Profile";
import EditUser from "./profile/EditUser";
import Home from "./home/Home";
import { useSelector } from "react-redux";

function Body() {
  const auth = useSelector((state) => state.auth);
  const { isLogged, isAdmin } = auth;

  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/user/reset/:token" element={<ResetPassword />} />
        <Route
          path="/user/activate/:activation_token"
          element={<ActivationEmail />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit_user/:id" element={<EditUser />} />
      </Routes>
    </section>
  );
}

export default Body;
