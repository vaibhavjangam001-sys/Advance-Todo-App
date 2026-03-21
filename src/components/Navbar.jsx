const Navbar = () => {
  return (
    <>
      <nav className="h-[96px] bg-gradient-to-r from-blue-500 to-purple-600 pl-16 pr-16 flex justify-between items-center">
        <img
          className="mt-5 w-24 h-24 rounded-full object-cover"
          src="/Logo.png"
          alt="logo"
        />
        <div className="flex h-[96px] gap-8 font-bold text-white text-[18px] items-center">
          <div className="bg-slate-300 px-4 py-1 rounded-[10px] ">
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="#">Contact</a>
          </div>
          <div>
            <a href="#">Login/Sing Up</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
