const Addtask = () => {
  return (
    <div className="lg:h-72 w-full p-8 bg-[rgb(38,44,44)] rounded-2xl flex flex-col gap-4 mt-[-20px]">
      <div>
        <textarea
          maxLength={210}
          placeholder="Enter Todo..."
          className="w-full h-24 resize-none p-3 rounded-[8px] bg-[#374151] border font-bold"
        ></textarea>
      </div>
      <div className="flex justify-around items-center gap-12">
        <select
          defaultValue="Personal"
          className="border font-bold pl-4 flex-1 h-10  rounded-[8px] bg-[#374151] inl"
          name=""
          id=""
        >
          <option value="">Personal</option>
          <option value="">Work</option>
          <option value="">Shopping</option>
          <option value="">Health</option>
        </select>

        <select
          defaultValue="Low Priority"
          className="flex-1 border font-bold pl-4 h-10 rounded-[8px] bg-[#374151]"
          name=""
          id=""
        >
          <option className="text-green-500 hover:bg-white" value="">
            Low Priority
          </option>
          <option className="text-yellow-500" value="">
            Medium Priority
          </option>
          <option className="text-red-500" value="">
            High Priority
          </option>
        </select>
        <input
          className="bg-[#374151] border font-bold p-4  h-10 rounded-[8px] pl-4 flex-1"
          type="date"
        />
      </div>
      <button className="w-full h-12 bg-[#2563EB] font-bold hover:cursor-pointer active:bg-[#4474da] rounded-[8px] ">
        {" "}
        <span className="text-2xl">+</span> Add Todo
      </button>
    </div>
  );
};

export default Addtask;
