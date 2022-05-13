import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </Navbar>
      
    </div>
  );
}

export default App;
