import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  MainPage,
  CalendarPage,
  SignUpPage,
  LoginPage,
} from "./components/declaration";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
