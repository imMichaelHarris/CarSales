export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = item => {
  console.log("creator")
  return {
    type: ADD_FEATURE,
    payload: item
  };
};
