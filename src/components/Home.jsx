import Addtask from "./Addtask";
import Dashboard from "./Dashboard";
import TaskContainer from "./TaskContainer";

const Home = () => {
  return (
    <div className=" h-[calc(100vh-96px)] mx-auto max-w-[1280px] flex flex-col gap-6">
      <Dashboard />
      <Addtask/>
      <TaskContainer/>
    </div>
  );
};

export default Home;
