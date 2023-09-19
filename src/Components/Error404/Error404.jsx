import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-52 mb-10 ">
        <h1 className="text-5xl font-bold">Oppsssssss</h1>
      </div>
      <div className="text-center">
        <NavLink to={"/"}>
        <button className=" text-white font-bold btn btn-lg btn-active hover:bg-primary bg-primary ">
          Back Home
        </button>
        </NavLink>
      </div>
    </>
  );
};

export default Error404;
