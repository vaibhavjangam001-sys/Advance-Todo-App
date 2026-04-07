import Card from "./Card";
import API from "../API/API";
import { useState } from "react";
import Delete from "./DeleteTaskPOPUP";

const TaskContainer = ({ taskData, getData, editTask }) => {
  const [category, setCategory] = useState("All");
  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const filterTodos = Array.isArray(taskData)
    ? taskData.filter((todo) => {
        return (
          todo.text?.toLowerCase().includes(search.toLowerCase()) &&
          (category === "All" ||
            todo.category?.toLowerCase().includes(category.toLowerCase())) &&
          (priority === "All" ||
            todo.priority?.[0].toLowerCase() === priority.toLowerCase()) &&
          (status === "All" ||
            todo.status?.toLowerCase() === status.toLowerCase())
        );
      })
    : [];

  const confirmDelete = async () => {
    await fetch(`${API}/Todos/${selectedId}`, {
      method: "DELETE",
    });
    await getData();
    setShowDelete(false);
  };

  const deleteTodo = (id) => {
    setSelectedId(id);
    setShowDelete(true);
  };

  const completedTodo = async (id) => {
    const task = taskData.find((item) => item.id === id);

    if (!task) return;

    if (
      task?.status?.toLowerCase() === "completed" ||
      task?.status?.toLowerCase() === "expired"
    ) {
      return;
    }

    await fetch(`${API}/Todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "Completed",
      }),
    });

    await getData();
  };

  return (
    <div className=" w-full bg-[rgb(38,44,44)]  rounded-[5px] md:rounded-2xl">
      <div
        className=" rounded-tl-2xl rounded-tr-2xl border-b-6 border-b-[#101828]
        p-4 md:p-10
        gap-4 md:gap-10
        flex flex-col md:flex-row
        items-stretch md:items-center"
      >
        <div className="relative flex-[4]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" border w-full font-bold pl-4  pr-12 h-10 rounded-[5px] md:rounded-[8px] bg-[#374151]"
            type="search"
            placeholder="Search Todos..."
          />
          <img
            src={`${import.meta.env.BASE_URL}search.png`}
            alt="search"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
          />
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border font-semibold md:font-bold w-full rounded-[2px] p-1  flex-1 h-10 cursor-pointer  md:rounded-[5px] bg-[#374151] "
          name=""
          id=""
        >
          <option value="All">All Categories</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Shopping">Shopping</option>
          <option value="Health">Health</option>
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border font-semibold md:font-bold w-full rounded-[2px] p-1  flex-1 h-10 cursor-pointer  md:rounded-[5px] bg-[#374151] "
          name=""
          id=""
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Expired">Expired</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border font-semibold md:font-bold w-full rounded-[2px] p-1  flex-1 h-10 cursor-pointer  md:rounded-[5px] bg-[#374151] "
          name=""
          id=""
        >
          <option value="All">All Priority</option>
          <option className="text-green-500" value="Low">
            Low
          </option>
          <option className="text-yellow-300" value="Medium">
            Medium
          </option>
          <option className="text-red-500" value="High">
            High
          </option>
        </select>
      </div>
      <div className="p-20 flex flex-col gap-4">
        {showDelete && (
          <Delete
            onConfirm={confirmDelete}
            onCancel={() => setShowDelete(false)}
          />
        )}

        {filterTodos.map((item) => (
          <Card
            key={item.id}
            item={item}
            deleteTodo={deleteTodo}
            completedTodo={completedTodo}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskContainer;
