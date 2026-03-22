import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `relative px-4 py-2 font-medium transition-colors ${isActive ? "text-white" : "text-gray-300 hover:text-white"} after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white after:transition-transform after:duration-300 ${isActive ? "after:scale-x-100" : "after:scale-x-0"} `;

const Navbar = () => {
  return (
    <>
      <nav className=" max-w-[1280px] m-auto rounded-2xl h-[96px] bg-[rgb(38,44,44)]  pl-4 pr-4 flex justify-between items-center">
        <div className="flex items-center">
          <img className=" w-16 h-16 object-cover" src="/Logo.png" alt="logo" />
          <h1 className="pl-2 font-[var(--font-clash)] text-4xl font-bold tracking-wider text-white">
            Focus<span className="text-amber-500">List</span>
          </h1>
        </div>
        <div className="flex h-[96px] gap-8 font-bold text-white text-[18px] items-center">
          <NavLink className={linkClass} to="/">
            Home
          </NavLink>
          <NavLink className={linkClass} to="/contact">
            Contact
          </NavLink>
          <NavLink className={linkClass} to="/singUpLogin">
            Sing Up/Login
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
