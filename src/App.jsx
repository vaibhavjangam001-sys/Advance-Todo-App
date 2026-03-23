import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SingUpLogin from "./components/SingUpLogin";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singUpLogin" element={<SingUpLogin />} />
      </Routes>
    </>
  );
};

export default App;
