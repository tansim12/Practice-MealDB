import { useNavigate } from "react-router-dom";

const CategorySingleDiv = ({ dataDetails }) => {
  const navigate = useNavigate();
  const handleCategoryShowDetails = (idMeal) => {
    // console.log(idMeal);
    navigate(`/filterSeafood/${idMeal}`);
  };

  const { strMealThumb, strMeal, idMeal } = dataDetails;
  return (
    <div className="">
      <div className="card p-5 w-96 bg-base-100 shadow-xl text-black ">
        <figure>
          <img src={strMealThumb} alt="Shoes" />
        </figure>
        <div className="card-body flex ">
          <h2 className="card-title">{strMeal}</h2>
        </div>
        <div className="card-actions justify-end flex-grow">
          <button
            onClick={() => handleCategoryShowDetails(idMeal)}
            className="btn btn-primary  font-bold"
          >
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySingleDiv;
