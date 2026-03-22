const Dashboard = () => {
  return (
  <div className=" flex justify-center gap-10 items-center  w-full min-h-[180px] md:min-h-[120px] lg:min-h-[140px]">
    <Box value="0" text="Total Tasks"/>
    <Box color="text-yellow-500" value="0" text="Active"/>
    <Box color="text-green-500" value="0" text="Completed"/>
    <Box color="text-red-500" value="0" text="Expired"/>
    <Box color="text-blue-500" value="0" text="Completion Rate"/>
  </div>
  );
};

export default Dashboard;

export const Box = ({text,value,color}) => {
  return <div className=" w-96 md:w-42 lg:w-[400px] h-22 md:h- lg:h-25 bg-[rgb(38,44,44)] rounded-2xl">
       <div className={`flex ${color} text-2xl justify-center  pt-2 pb-2 font-bold`}>
         <p>{text}</p>
       </div>
        <p className="flex justify-center font-bold text-2xl">{value}</p>
  </div>;
};
