const CategoryDiv = ({ dataDetails }) => {
//   console.log(dataDetails);
  const {strCategoryDescription, strCategoryThumb, strCategory } = dataDetails;

  // const {strCategoryThumb} = dataDetails.categories
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl text-black">
        <figure>
          <img src={strCategoryThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strCategory}</h2>
          <p>{`${strCategoryDescription.slice(0 ,100)} `}</p>
          
        </div>
      </div>
    </div>
  );
};

export default CategoryDiv;
