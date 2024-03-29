import React from "react";
import { connect } from "react-redux";
import { CarProvider, StoreProvider } from "./contexts/CarContext";
import { addFeature } from "./actions";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = ({ state, addFeature }) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    console.log("buy");
    // dipsatch an action here to add an item
    addFeature(item);
  };
  console.log(state)

  return (
    <div className="boxes">
      <CarProvider value={state.car}>
        <div className="box">
          <Header />
          <AddedFeatures />
        </div>
        <div className="box">
          <StoreProvider
            value={{
              store: state.store,
              additionalPrice: state.additionalPrice,
              buyItem
            }}
          >
            <AdditionalFeatures />
            <Total />
          </StoreProvider>
        </div>
      </CarProvider>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { addFeature }
)(App);
