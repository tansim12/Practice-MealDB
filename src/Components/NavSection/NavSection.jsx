import { NavLink } from "react-router-dom";

const NavSection = () => {
  return (
    <div className="flex justify-between px-5  py-5 items-center mb-10 sticky ">
      <div>
        <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
      </div>
      <div className="space-x-4">
        <NavLink
          to="/filterSeafood"
          className={({ isActive, isPending }) =>
            isActive
              ? "btn btn-sm bg-primary text-white font-bold hover:bg-red-600"
              : isPending
              ? "pending"
              : " btn btn-sm"
          }
        >
          {" "}
          <button>Seafood</button>
        </NavLink>
        <NavLink
          to="/category"
          className={({ isActive, isPending }) =>
            isActive
              ? "btn btn-sm bg-primary text-white font-bold hover:bg-red-600"
              : isPending
              ? "pending"
              : " btn btn-sm"
          }
        >
          {" "}
          <button>All Category</button>
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive
              ? "btn btn-sm bg-primary text-white font-bold hover:bg-red-600"
              : isPending
              ? "pending"
              : " btn btn-sm"
          }
        >
          <button>Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavSection;
