import React, { useContext } from "react";
import { StoreContext } from "../contexts/CarContext";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = () => {
  const { store, buyItem } = useContext(StoreContext);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {store.length ? (
        <ol type="1">
          {store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
