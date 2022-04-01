import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddContactForm from "./components/forms/AddContactForm";
import DashboardLayout from "./components/layout/DashboardLayout";
import "./styles/global.css";

function App() {
  console.log("shsh");
  return (
    <Router>
      <DashboardLayout>
        <Routes>

          <Route path="/add-contact" element={<AddContactForm />} />
          <Route path="/" element={<p>Home</p>} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
