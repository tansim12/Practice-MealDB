import { useEffect, useState } from "react";

import AreaImageLinkDiv from "./AreaImageLinkDiv";

const AreaImgDiv = () => {
  const [area, setArea] = useState([]);
  useEffect(() => {
    const fetchAreaData = async () => {
      try {
        const res = await fetch("./areaData.json");
        const data = await res.json();
        setArea(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAreaData();
  }, []);
  const newData = area.meals || [];
//   console.log(newData);
  return (
    <>
    <hr className="border-2 mt-5" />
    <h1 className="text-3xl font-bold text-center  my-10">Browse Country</h1>
    <div className="flex gap-3 flex-wrap justify-center">
      {newData.map((dataDetails, index) => (
        <AreaImageLinkDiv key={index} dataDetails={dataDetails} />
      ))}
    </div>
    </>
  );
};

export default AreaImgDiv;
