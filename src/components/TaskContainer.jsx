import Card from "./Card";

const TaskContainer = () => {
  return (
    <div className="h-auto w-full bg-[rgb(38,44,44)] rounded-2xl">
      <div className="lg:min-h-24 rounded-tl-2xl rounded-tr-2xl border-b-6 p-5 border-b-[#101828] gap-10 flex justify-center items-center">
        <div className="relative flex-[2]">
            <input
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
          defaultValue="All Categories"
          className="flex-1 border font-bold pl-4 h-10 rounded-[8px] bg-[#374151]"
          name=""
          id=""
        >
          <option value="">All Categories</option>
          <option value="">Personal</option>
          <option value="">Work</option>
          <option value="">Shopping</option>
          <option value="">Health</option>
        </select>
        <select
          defaultValue="All Status"
          className="flex-1 border font-bold pl-4 h-10 rounded-[8px] bg-[#374151]"
          name=""
          id=""
        >
          <option value="">All Status</option>
          <option value="">Active</option>
          <option value="">Completed</option>
          <option value="">Expired</option>
        </select>
      </div>
      <div className="p-20 flex flex-col gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default TaskContainer;
