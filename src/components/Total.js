import React, { useContext } from "react";
import { CarContext, StoreContext } from "../contexts/CarContext";

const Total = () => {
  const car = useContext(CarContext);
  const { additionalPrice } = useContext(StoreContext);
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

export default Total;
