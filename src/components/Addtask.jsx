import { useRef, useState, useEffect } from "react";
import API from "../API/API";
import TaskContainer from "./TaskContainer";

const Addtask = ({ getData, taskData }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [priority, setPriority] = useState("Select Priority");
  const [endDate, setEndDate] = useState(() => {
  const today = new Date();
  return today.toISOString().split('T')[0];
});
  const [editId, setEditId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const dateRef = useRef();

  const resetForm = () => {
    setText("");
    setCategory("Select Category");
    setPriority("Select Priority");
    setEndDate(new Date().toISOString().split('T')[0]);
    setEditId(null);
    setIsEdit(false);
  };

  const handleSubmit = () => {
    if (isEdit) {
      updateTask();
    } else {
      addTask();
    }
  };

  useEffect(() => {
    if (text.trim() !== "") {
      setError(false);
      setErrorMsg("");
    }
  }, [text, category, priority, endDate]);

  const addTask = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const expiredDate = new Date(endDate);
    expiredDate.setHours(0, 0, 0, 0);

    if (
      !text &&
      category === "Select Category" &&
      priority === "Select Priority" &&
      !endDate
    ) {
      setError(true);
      setErrorMsg(
        " Please enter a task, select a category, select a priority, and choose a due date.",
      );
      return;
    } else if (text.trim() === "") {
      setError(true);
      setErrorMsg("Please enter a task");
      return;
    } else if (category === "Select Category") {
      setError(true);
      setErrorMsg("select a category");
      return;
    } else if (priority === "Select Priority") {
      setError(true);
      setErrorMsg("select a priority");
      return;
    } else if (endDate === "") {
      setError(true);
      setErrorMsg("choose a due date");
      return;
    } else if (today > expiredDate) {
      setError(true);
      setErrorMsg("choose a  valid due date");
      return;
    } else {
      const revEndDate = endDate.split("-").reverse().join("-");
      const createDate = new Date().toLocaleString("en-IN");

      await fetch(`${API}/Todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          category,
          priority: [
            priority,
            priority === "Low"
              ? "bg-green-500"
              : priority === "Medium"
                ? "bg-yellow-500"
                : "bg-red-500",
          ],
          createDate,
          revEndDate,
          status: "Active",
        }),
      });
      await getData();

      setText("");
      setCategory("Select Category");
      setPriority("Select Priority");
      setEndDate(new Date().toISOString().split('T')[0]);
      setError(false);
      setErrorMsg(null);
    }
  };

  const updateTask = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const expiredDate = new Date(endDate);
    expiredDate.setHours(0, 0, 0, 0);

    if (
      !text &&
      category === "Select Category" &&
      priority === "Select Priority" &&
      !endDate
    ) {
      setError(true);
      setErrorMsg(
        " Please enter a task, select a category, select a priority, and choose a due date.",
      );
      return;
    } else if (text.trim() === "") {
      setError(true);
      setErrorMsg("Please enter a task");
      return;
    } else if (category === "Select Category") {
      setError(true);
      setErrorMsg("select a category");
      return;
    } else if (priority === "Select Priority") {
      setError(true);
      setErrorMsg("select a priority");
      return;
    } else if (endDate === "") {
      setError(true);
      setErrorMsg("choose a due date");
      return;
    } else if (today > expiredDate) {
      setError(true);
      setErrorMsg("choose a  valid due date");
      return;
    } else {
      const revEndDate = endDate.split("-").reverse().join("-");
      const createDate = new Date().toLocaleString("en-IN");

      await fetch(`${API}/Todos/${editId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          category,
          priority: [
            priority,
            priority === "Low"
              ? "bg-green-500"
              : priority === "Medium"
                ? "bg-yellow-500"
                : "bg-red-500",
          ],
          createDate,
          revEndDate,
          status: "Active",
        }),
      });

      await getData();
      resetForm();
    }
  };

 const editTask = (id) => {
  const result = taskData.find((item) => item.id === id);

  if (!result) return;

  if (
    result?.status?.toLowerCase() === "completed" ||
    result?.status?.toLowerCase() === "expired"
  ) {
    return;
  }

  setText(result.text);
  setCategory(result.category);
  setPriority(result.priority[0]);

  const revEndDate = result.revEndDate.split("-").reverse().join("-");
  setEndDate(revEndDate);

  setEditId(result.id);
  setIsEdit(true);

  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <>
      <div
        className={`${error ? "h-auto" : "lg:h-80"} w-full md:p-8  bg-[rgb(38,44,44)] p-4  rounded-[5px] md:rounded-2xl flex flex-col gap-4 shadow-lg`}
      >
          <textarea
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            autoCapitalize="off"
            onChange={(e) => setText(e.target.value)}
            value={text}
            maxLength={210}
            placeholder="Enter Todo..."
            className="w-full h-24 resize-none font-semibold p-3 rounded-[2px] md:rounded-[5px] bg-[#374151] border outline-none md:font-bold"
          ></textarea>

        <div className="flex flex-col md:flex-row gap-4  md:gap-12">
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="border font-semibold md:font-bold w-full rounded-[2px] p-1  flex-1 h-10 cursor-pointer  md:rounded-[5px] bg-[#374151] "
          >
            <option value="">Select Category</option>
            <option value="Work">Work</option>
            <option value="Shopping">Shopping</option>
            <option value="Health">Health</option>
            <option value="Study">Study</option>
          </select>

          <select
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
            className="border font-semibold md:font-bold w-full rounded-[2px] p-1  flex-1 h-10 cursor-pointer  md:rounded-[5px] bg-[#374151] "
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
            className="border font-semibold md:font-bold w-full rounded-[2px] p-1  flex-1 h-10 cursor-pointer  md:rounded-[5px] bg-[#374151] -[#374151] border"
          >
            {" "}
            <input
              ref={dateRef}
              onChange={(e) => setEndDate(e.target.value)}
              type="date"
              value={endDate}
              className="bg-transparent w-full outline-none text-white cursor-pointer"
            />
          </div>
        </div>


        <div className="flex flex-col md:flex-row gap-3">
          <button
            onClick={handleSubmit}
            className={`flex-1 h-12 font-semibold md:font-bold hover:cursor-pointer active:bg-[#4474da] rounded-[2px] md:rounded-[5px] ${
              isEdit ? "bg-[#10B981]" : "bg-[#2563EB]"
            }`}
          >
            <span className=" text-sm md:text-2xl">{isEdit ? "✏️" : "+"}</span>
            {isEdit ? " Update Todo" : " Add Todo"}
          </button>

          {isEdit && (
            <button
              onClick={resetForm}
              className="flex-1 h-12 bg-[#6B7280]  font-semibold md:font-bold hover:cursor-pointer active:bg-[#4B5563] rounded-[2px] md:rounded-[5px]"
            >
              Cancel
            </button>
          )}
        </div>
        {error && errorMsg && (
          <div className="flex-1 bg-red-600 rounded-[2px] md:rounded-[5px] flex  ">
            <span className="text-white font-semibold md:font-bold text-sm p-2 md:pl-5">
              Warning : - {errorMsg}{" "}
            </span>
          </div>
        )}
      </div>
      <TaskContainer
        editTask={editTask}
        getData={getData}
        taskData={taskData}
      />
    </>
  );
};

export default Addtask;
