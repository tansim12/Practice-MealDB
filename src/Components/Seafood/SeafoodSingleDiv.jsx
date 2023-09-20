import { useLoaderData, useNavigate } from "react-router-dom";

const SeafoodSingleDiv = () => {
  const data = useLoaderData();
  const navigate = useNavigate()
  const back = ()=> navigate(-1)
  // console.log(data.meals);
  return (
    <>
      {/* details and picture  */}
      <div>
        {data.meals.map((dataDetails, index) => (
          <div className="flex gap-10" key={index}>
            <div className="w-[40%]">
              <img
                className="rounded-xl "
                src={dataDetails?.strMealThumb}
                alt=""
              />
              <p className="my-5 text-4xl font-bold">
                Youtube Link :{" "}
                <span className="text-blue-500 underline">
                  <a
                    href={
                      dataDetails?.strYoutube ? dataDetails?.strYoutube : null
                    }
                  >
                    Click Here
                  </a>
                </span>
              </p>
            </div>
            <div className="border-2 border-white w-[60%] text-center flex items-center">
              <p>
                {dataDetails?.strInstructions
                  ? dataDetails?.strInstructions
                  : null}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={back} className=" text-white font-bold btn btn-lg btn-active hover:bg-primary rounded-md bg-orange-500 ">
        Back
      </button>
    </>
  );
};

export default SeafoodSingleDiv;
