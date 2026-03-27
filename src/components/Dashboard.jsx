const Dashboard = ({ taskData }) => {
  const totalTask = taskData.length;

  let active = 0,completed = 0,expired = 0;

  taskData.filter((todo)=>{
    const status = todo?.status?.toLowerCase();
    if(status === "active") active++;
    else if(status === "completed") completed++;
    else expired++;
  })
  
  const completionRate = totalTask > 0 ? Math.round((completed * 100) / totalTask): 0;

  return (
    <div className=" flex justify-center gap-10 items-center  w-full min-h-[180px] md:min-h-[120px] lg:min-h-[140px]">
      <Box value={totalTask} text="Total Tasks" />
      <Box color="text-yellow-500" value={active} text="Active" />
      <Box color="text-green-500" value={completed} text="Completed" />
      <Box color="text-red-500" value={expired} text="Expired" />
      <Box color="text-blue-500" value={`${completionRate}%`} text="Completion Rate" />
    </div>
  );
};

export default Dashboard;

export const Box = ({ text, value, color }) => {
  return (
    <div className=" w-96 md:w-42 lg:w-[400px] h-22  lg:h-25 bg-[rgb(38,44,44)] rounded-2xl">
      <div
        className={`flex ${color} text-2xl justify-center  pt-2 pb-2 font-bold`}
      >
        <p>{text}</p>
      </div>
      <p className="flex justify-center font-bold text-2xl">{value}</p>
    </div>
  );
};
