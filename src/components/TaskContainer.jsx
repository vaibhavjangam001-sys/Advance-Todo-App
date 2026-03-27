import Card from "./Card";
import API from "../API/API";
import { useState } from "react";

const TaskContainer = ({ taskData, getData,editTask }) => {

  const [category,setCategory] = useState("All");
  const [priority,setPriority] = useState("All");
  const [status,setStatus] = useState("All");
  const [search,setSearch] = useState("")

  const filterTodos = taskData.filter(todo=>{
    return (
   (todo.text?.toLowerCase().includes(search.toLowerCase())) &&
   ( category === "All" || todo.category?.toLowerCase().includes(category.toLowerCase())) &&
   ( priority === "All" || todo.priority?.[0].toLowerCase() === priority.toLowerCase() )&& 
   ( status === "All" || todo.status?.toLowerCase() === status.toLowerCase())
  );
  })


  const deleteTodo = async (id) => {
    await fetch(`${API}/Todos/${id}`, {
      method: "DELETE",
    });
    getData();
  };

  const completedTodo = async(id) =>{
    await fetch(`${API}/Todos/${id}`,{
      method : "PATCH",
      headers: {
        "Content-type" : "application/json"
      },
      body : JSON.stringify({
        status : "Completed"
      }),
    });
    getData();
  };


  return (
    <div className="h-auto w-full bg-[rgb(38,44,44)] rounded-2xl">
      <div className="lg:min-h-24 rounded-tl-2xl rounded-tr-2xl border-b-6 p-10 border-b-[#101828] gap-10 flex justify-center items-center">
        <div className="relative flex-[4]">
          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className=" border w-full font-bold pl-4  pr-12 h-10 rounded-[8px] bg-[#374151]"
            type="search"
            placeholder="Search Todos..."
          />
          <img
            src="/search.png"
            alt="search"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
          />
        </div>
        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="flex-1 border font-bold cursor-pointer  h-10 rounded-[8px] bg-[#374151]"
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
          onChange={(e)=>setStatus(e.target.value)}
          className="flex-1 border font-bold cursor-pointer h-10 rounded-[8px] bg-[#374151]"
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
          onChange={(e)=>setPriority(e.target.value)}
          className="flex-1 border font-bold h-10 cursor-pointer rounded-[8px] bg-[#374151]"
          name=""
          id=""
        >
          <option value="All">All Priority</option>
          <option className="text-green-500" value="Low">Low</option>
          <option className="text-yellow-300" value="Medium">Medium</option>
          <option className="text-red-500" value="High">High</option>
        </select>

          
      </div>
      <div className="p-20 flex flex-col gap-4">
       {
          filterTodos.map((item)=>(
            <Card key={item.id} item={item} deleteTodo={deleteTodo} completedTodo={completedTodo} editTask={editTask} />
          ))
       }
      </div>
    </div>
  );
};

export default TaskContainer;
