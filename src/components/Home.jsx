import { useEffect, useState } from "react";
import Addtask from "./Addtask";
import Dashboard from "./Dashboard";
import TaskContainer from "./TaskContainer";
import API from "../API/API";

const Home = () => {
  const [taskData, setTaskData] = useState([]);

  const getData = async () => {
    const response = await fetch(`${API}`);
    let data = await response.json();
    setTaskData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" h-[calc(100vh-96px)] mx-auto max-w-[1280px] flex flex-col gap-6">
      <Dashboard />
      <Addtask getData={getData} taskData={taskData} />
      
    </div>
  );
};

export default Home;
