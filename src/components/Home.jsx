import { useEffect, useState } from "react";
import Addtask from "./Addtask";
import Dashboard from "./Dashboard";
import API from "../API/API";

const Home = () => {
  const [taskData, setTaskData] = useState([]);

  const getData = async () => {
    const response = await fetch(`${API}/Todos`);
    let data = await response.json();
    setTaskData(data.Todos);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterExpiredTask = async (id) => {
    await fetch(`${API}/Todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "Expired",
      }),
    });
  };

 useEffect(() => {
  const checkExpired = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let updated = false;

    for (let todo of taskData) {
      const [day, month, year] = todo.revEndDate.split("-");
      const expiredDate = new Date(year, month - 1, day);
      expiredDate.setHours(0, 0, 0, 0);

      if (
        expiredDate < today &&
        todo?.status.toLowerCase() === "active"
      ) {
        await filterExpiredTask(todo.id);
        updated = true;
      }
    }

    if (updated) {
      getData();
    }
  };

  if (taskData.length > 0) {
    checkExpired(); 
  }
}, [taskData]);
  return (
    <div className=" h-[calc(100vh-96px)] mx-auto max-w-[1280px] flex flex-col gap-6">
      <Dashboard taskData={taskData} />
      <Addtask getData={getData} taskData={taskData} />
    </div>
  );
};

export default Home;
