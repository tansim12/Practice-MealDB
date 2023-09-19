import { useNavigate } from "react-router-dom";
const SeafoodDiv = ({ dataDetails }) => {
  const { strMealThumb, strMeal, idMeal } = dataDetails;
  const navigate = useNavigate();
  const handleShowDetails = (idMeal) => {
    navigate(`/filterSeafood/${idMeal}`);
  };
  return (
    <div className="">
      <div className="card p-5  bg-base-100 shadow-xl text-black ">
        <figure>
          <img src={strMealThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
        </div>
        <div className="card-actions justify-end flex-grow">
          <button
            onClick={() => handleShowDetails(idMeal)}
            className="btn btn-primary  font-bold"
          >
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeafoodDiv;
