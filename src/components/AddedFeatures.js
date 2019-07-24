import React, { useContext } from "react";
import { CarContext } from "../contexts/CarContext";
import AddedFeature from "./AddedFeature";

const AddedFeatures = () => {
  const car = useContext(CarContext)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
