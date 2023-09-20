import { useLoaderData, useNavigate } from "react-router-dom";
import SeafoodDiv from "../Seafood/SeafoodDiv";

const MatchAreaFood = () => {
  const data = useLoaderData();
  const navigate = useNavigate()
  const back = ()=> navigate(-1)
  //   console.log(data.meals);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.meals.map((dataDetails, index) => (
            <SeafoodDiv key={index} dataDetails={dataDetails}></SeafoodDiv>
        ))}
      </div>
      <div className="text-center my-10">
        <button
          onClick={back}
          className=" text-white font-bold btn btn-lg btn-active hover:bg-primary rounded-md bg-orange-500 "
        >
          Back
        </button>
      </div>
    </>
  );
};

export default MatchAreaFood;
