import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginModal/LoginModal";
import ErrorPage from "./ErrorPage/ErrorPage";
import Dashboard from "./Dashboard/Dashboard"
import HomePage from "./HomePage/HomePage";

function App() {
  return (
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/dashboard" element={
          <Dashboard />
        }/>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  );
}

export default App;
