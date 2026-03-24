import { useRef, useState } from "react";
import API from "../API/API";

const Addtask = ({ getData }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [priority, setPriority] = useState();
  const [endDate, setEndDate] = useState("");

  const dateRef = useRef();

  const addTask = async () => {

    const createDate = new Date().toLocaleString("en-IN");
  
    let bgColor = "bg-green-500"

    if(priority === "Medium"){
      bgColor = "bg-yellow-500"
    }
    else if(priority === "High"){
        bgColor = "bg-red-500" 
    }

    await fetch(`${API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        category,
        priority,
        createDate,
        endDate,
        bgColor,
      }),
    });
    getData();

    setText("");
    setCategory("Select Category");
    setPriority("Select Priority");
    setEndDate("");
  };

  return (
    <div className="lg:h-72 w-full p-8 bg-[rgb(38,44,44)] rounded-2xl flex flex-col gap-4 mt-[-20px]">
      <div>
        <textarea
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          autoCapitalize="off"
          onChange={(e) => setText(e.target.value)}
          value={text}
          maxLength={210}
          placeholder="Enter Todo..."
          className="w-full h-24 resize-none p-3 rounded-[8px] bg-[#374151] border font-bold"
        ></textarea>
      </div>
      <div className="flex justify-around items-center gap-12">
        <select
          onChange={(e) => setCategory(e.target.value)}
          defaultValue={category}
          value={category}
          className="border font-bold  flex-1 h-10 cursor-pointer  rounded-[8px] bg-[#374151] inl"
          name=""
          id=""
        >
          <option value="">Select Category</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Shopping">Shopping</option>
          <option value="Health">Health</option>
          <option value="Any Other">Any Other</option>
        </select>

        <select
          onChange={(e) => setPriority(e.target.value)}
          defaultValue={priority}
          value={priority}
          className="flex-1 border font-bold  cursor-pointer  h-10 rounded-[8px] bg-[#374151]"
          name=""
          id=""
        >
          <option value="">Select Priority</option>
          <option className="text-green-500 hover:bg-white" value="Low">
            Low
          </option>
          <option className="text-yellow-500" value="Medium">
            Medium
          </option>
          <option className="text-red-500" value="High">
            High
          </option>
        </select>
        <div
          onClick={() => dateRef.current.showPicker()}
          className="bg-[#374151] border flex-1 h-10 rounded-[8px] flex items-center px-4 cursor-pointer"
        >
          {" "}
          <input
            ref={dateRef}
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
            value={endDate}
            className="bg-transparent w-full outline-none text-white cursor-pointer"
          />{" "}
        </div>
      </div>
      <button
        onClick={addTask}
        className="w-full h-12 bg-[#2563EB] font-bold hover:cursor-pointer active:bg-[#4474da] rounded-[8px] "
      >
        <span className="text-2xl">+</span> Add Todo
      </button>
    </div>
  );
};

export default Addtask;
