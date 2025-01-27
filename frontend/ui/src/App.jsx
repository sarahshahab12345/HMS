import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router
import "./App.css";
import Homepage from "../src/pages/Homepage";
import RoomsPage from "../src/pages/RoomsPage";
import ContactPage from "../src/pages/ContactPage";
import PolicyPage from "./pages/Policypage";
import Teampage from "./pages/Teampage";
import Founder from "./pages/Founder";
import Brand from "./pages/BrandsPage";

function App() {
  return (
      <>
      <Routes>
        {/* Set the homepage to the root route ("/") */}
        <Route path="/" element={<Homepage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/booking" element={<ContactPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/admin" element={<Founder/>} />
        <Route path="/brand" element={<Brand/>}/>
      </Routes>
      </>
   
  );
}

export default App;
