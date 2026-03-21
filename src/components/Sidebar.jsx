import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-96px)] w-64 bg-white border-r border-black flex flex-col flex-1 max-w-64">
      <Box text="All Task" link="/" />
      <Box text="In Progress" link="/inprogress" />
      <Box text="Pending" link="pending" />
      <Box text="Completed" link="completed" />
    </div>
  );
};

export default Sidebar;

export const Box = ({ text, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `h-10 w-full font-bold text-xl flex justify-center items-center border-b ${
          isActive
            ? "bg-slate-300 text-black"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      {text}
    </NavLink>
  );
};
