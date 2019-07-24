import React from "react";
import { connect } from "react-redux";
import { CarProvider } from "./contexts/CarContext";
import { StoreProvider } from "./contexts/StoreContext";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = ({ state }) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

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
              additionalPrice: state.additionalPrice
            }}
          >
            <AdditionalFeatures store={state.store} />
            <Total car={state.car} additionalPrice={state.additionalPrice} />
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
  {}
)(App);
