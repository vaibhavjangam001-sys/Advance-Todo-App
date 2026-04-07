const Navbar = () => {
  return (
    <>
      <nav className="max-w-[1280px] mx-auto mt-4 rounded-[5px] md:rounded-2xl bg-[rgb(38,44,44)] px-4 py-3">
        <div className="flex items-center">
          <img
            className="w-10 h-10 md:w-16 md:h-16 object-cover"
            src={`${import.meta.env.BASE_URL}Logo.png`}
            alt="logo"
          />
          <h1 className="pl-2 font-[var(--font-clash)] text-2xl  md:text-4xl font-bold tracking-wider text-white">
            Focus<span className="text-amber-500">List</span>
          </h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
