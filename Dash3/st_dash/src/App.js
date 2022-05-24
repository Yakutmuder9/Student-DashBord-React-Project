import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import Dashboard from "./Dashboard/index"
import HomePage from "./HomePage/HomePage";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/dashboard" element={
          <Dashboard />
        }/>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  );
}

export default App;
