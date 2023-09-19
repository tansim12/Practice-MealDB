import { useLoaderData, useNavigate } from "react-router-dom";
import CategoryDiv from "./CategoryDiv";

const CategoryButton = () => {
  const data = useLoaderData();
  const navigate = useNavigate()
  const HandleCategorySingleDetails =(strCategory) => {
    navigate(`/category/${strCategory}`)
  }
  return (
    <>
    <div className="flex justify-between ">
        {
            data.categories.map(dataDetails => <button onClick={()=>HandleCategorySingleDetails(dataDetails.strCategory)}  className="btn btn-sm my-5 hover:bg-primary hover:text-white font-bold" key={dataDetails.idCategory}>{dataDetails.strCategory}</button>)
        }
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {data.categories.map((dataDetails) => (
          <CategoryDiv key={dataDetails.idCategory}  dataDetails={dataDetails}></CategoryDiv>
        ))}
      </div>
    </>
  );
};

export default CategoryButton;
