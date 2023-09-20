import {  useNavigate } from "react-router-dom";

const AreaImageLinkDiv = ({ dataDetails }) => {
  const navigate = useNavigate();
  const handleMatchArea = (areaName) => {
    navigate(`/areaFood/${areaName}`);
  };
  return (
    <div>
      <button onClick={() => handleMatchArea(dataDetails?.area?.area_name)}>
        <img src={dataDetails?.area?.area_img} alt="" />
      </button>
    </div>
  );
};

export default AreaImageLinkDiv;
