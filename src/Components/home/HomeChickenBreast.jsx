import { useLoaderData } from "react-router-dom";
import HomeChickenDiv from "./HomeChickenDiv";

const HomeChickenBreast = () => {
  const data = useLoaderData();
//   console.log(data);
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center my-10 underline">
        Meals Of Chicken Breast
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.meals.map((dataDetails, index) => (
          <HomeChickenDiv key={index} dataDetails={dataDetails}></HomeChickenDiv>
        ))}
      </div>
    </>
  );
};

export default HomeChickenBreast;
