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
    <div className="flex justify-center gap-10 items-center w-full min-h-[180px] md:min-h-[120px] lg:min-h-[140px]">
      <Box value={totalTask} text="Total Tasks" />
      <Box color="text-yellow-500" value={active} text="Active" />
      <Box color="text-green-500" value={completed} text="Completed" />
      <Box color="text-red-500" value={expired} text="Expired" />
      <Box
        color="text-blue-500"
        value={`${completionRate}%`}
        text="Completion Rate"
      />
    </div>
  );
};