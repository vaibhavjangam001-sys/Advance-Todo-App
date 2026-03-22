import Addtask from "./Addtask";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className=" h-[calc(100vh-96px)] mx-auto max-w-[1280px]">
      <Dashboard />
      <Addtask/>
    </div>
  );
};

export default Home;
