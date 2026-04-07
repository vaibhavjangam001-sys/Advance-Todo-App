const Dashboard = ({ taskData }) => {
  const totalTask = taskData?.length || 0;

  let active = 0,
    completed = 0,
    expired = 0;

  taskData?.forEach((todo) => {
    const status = todo?.status?.toLowerCase();

    if (status === "active") active++;
    else if (status === "completed") completed++;
    else expired++;
  });

  const completionRate =
    totalTask > 0 ? Math.round((completed * 100) / totalTask) : 0;

  return (
    <div className="grid grid-cols-3 md:grid-cols-5  gap-4 w-full mt-6">


      <div className="col-span-3  flex justify-center md:hidden">
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <Box value={totalTask} text="Total Tasks" />
          <Box color="text-blue-500"value={`${completionRate}%`} text="Completion Rate"/>
        </div>
      </div>


      <div className="hidden md:block">
         <Box value={totalTask} text="Total Tasks" />
      </div>

      
      <Box color="text-yellow-500" value={active} text="Active" />
      <Box color="text-green-500" value={completed} text="Completed" />
      <Box color="text-red-500" value={expired} text="Expired" />

      <div className="hidden md:block">
        <Box color="text-blue-500" value={`${completionRate}%`} text="Completion Rate" />
      </div>

    </div>
  );
};

export default Dashboard;

export const Box = ({ text, value, color }) => {
  return (
    <div className="  bg-[rgb(38,44,44)] rounded-[5px] md:rounded-2xl  p-4 shadow-md">
      <p className={`text-center ${color} text-sm lg:text-lg font-semibold`}>
        {text}
      </p>
      <p className="text-center text-xl md:text-2xl font-bold mt-2 text-white">
        {value}
      </p>
    </div>
  );
};
