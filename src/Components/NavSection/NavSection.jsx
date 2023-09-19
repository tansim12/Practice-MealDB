import { NavLink } from "react-router-dom";

const NavSection = () => {
  return (
    <div className="flex justify-between px-5  py-5 items-center mb-10 sticky ">
      <div>
        <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
      </div>
      <div className="space-x-4">
      <NavLink to="/filterSeafood"> <button className=" text-white font-bold px-2 py-1 rounded-md bg-primary">
          Seafood
        </button></NavLink>
      <NavLink to="/category"> <button className=" text-white font-bold px-2 py-1 rounded-md bg-primary">
          All Category
        </button></NavLink>
      <NavLink to={"/"}>
        <button className=" text-white font-bold px-2 py-1 rounded-md bg-primary ">
          Home
        </button>
      </NavLink>
      </div>
    </div>
  );
};

export default NavSection;
