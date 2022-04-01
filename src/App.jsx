import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactProvider } from "./context/ContactContext";
import AddContactForm from "./components/forms/AddContactForm";
import ContactDetailsView from "./components/elements/ContactDetailsView";
import DashboardLayout from "./components/layout/DashboardLayout";
import "./styles/global.css";

function App() {
  return (
    <ContactProvider>
      <Router>
        <DashboardLayout>
          <Routes>
            <Route path="/add-contact" element={<AddContactForm />} />
            <Route path="/" element={<ContactDetailsView />} />
          </Routes>
        </DashboardLayout>
      </Router>
    </ContactProvider>
  );
}

export default App;
