import { useLoaderData, useNavigate } from "react-router-dom";
import CategorySingleDiv from "./CategorySingleDiv";

const CategorySingleDetails = () => {
    const navigate = useNavigate()
    const back = ()=>navigate(-1)
  const data = useLoaderData();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.meals.map((dataDetails, index) => (
          <CategorySingleDiv
            key={index}
            dataDetails={dataDetails}
          ></CategorySingleDiv>
        ))}
      </div>
      <div>
      <div className="text-center">
      <button onClick={back} className=" text-white font-bold btn btn-lg btn-active hover:bg-primary rounded-md bg-orange-500 ">
        Back
      </button>
      </div>
      </div>
    </>
  );
};

export default CategorySingleDetails;
