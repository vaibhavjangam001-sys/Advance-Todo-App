import { useRef, useState, useEffect } from "react";
import API from "../API/API";
import TaskContainer from "./TaskContainer";

const Addtask = ({ getData, taskData }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [priority, setPriority] = useState("Select Priority");
  const [endDate, setEndDate] = useState("");
  const [editId, setEditId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const dateRef = useRef();

  const resetForm = () => {
    setText("");
    setCategory("Select Category");
    setPriority("Select Priority");
    setEndDate("");
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
      setEndDate("");
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

  const editTask = async (id) => {
    const data = await fetch(`${API}/Todos/${id}`);
    const result = await data.json();

    if (
      result?.status.toLowerCase() === "completed" ||
      result?.status.toLowerCase() === "expired"
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
        className={`${error ? "h-auto" : "lg:h-80"} w-full p-8 bg-[rgb(38,44,44)] rounded-2xl flex flex-col gap-4`}
      >
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
            value={category}
            className="border font-bold  flex-1 h-10 cursor-pointer  rounded-[8px] bg-[#374151] inl"
            name=""
            id=""
          >
            <option value="">Select Category</option>
            <option value="💼 Work">Work</option>
            <option value="🛒 Shopping">Shopping</option>
            <option value="💪 Health">Health</option>
            <option value="👩🏻‍💻 Study">Study</option>
          </select>

          <select
            onChange={(e) => setPriority(e.target.value)}
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
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className={`flex-1 h-12 font-bold hover:cursor-pointer active:bg-[#4474da] rounded-[8px] ${
              isEdit ? "bg-[#10B981]" : "bg-[#2563EB]"
            }`}
          >
            <span className="text-2xl">{isEdit ? "✏️" : "+"}</span>
            {isEdit ? " Update Todo" : " Add Todo"}
          </button>

          {isEdit && (
            <button
              onClick={resetForm}
              className="flex-1 h-12 bg-[#6B7280] font-bold hover:cursor-pointer active:bg-[#4B5563] rounded-[8px]"
            >
              Cancel
            </button>
          )}
        </div>
        {error && errorMsg && (
          <div className="flex-1 bg-red-600 rounded-2xl">
            <span className="text-white font-bold text-sm pl-5">
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
