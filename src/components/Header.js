import React, { useContext } from "react";
import { CarContext } from "../contexts/CarContext";

const Header = () => {
  const car = useContext(CarContext);
  return (
    <>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};

export default Header;
