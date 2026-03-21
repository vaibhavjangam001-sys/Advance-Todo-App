import All from "./components/All";
import Completed from "./components/Completed";
import Inprogress from "./components/Inprogress";
import ManiContainer from "./components/ManiContainer";
import Navbar from "./components/Navbar";
import Pending from "./components/Pending";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />
        <div flex flex-col>
          <div></div>
          <div className="flex-1 flex justify-center items-center">
            <Routes>
              <Route path="/" element={<All />} />
              <Route path="/inprogress" element={<Inprogress />} />
              <Route path="/pending" element={<Pending />} />
              <Route path="/completed" element={<Completed />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
