export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const addFeature = item => {
  console.log("creator")
  return {
    type: ADD_FEATURE,
    payload: item
  };
};

export const removeFeature = itemId => {
  return {
    type: REMOVE_FEATURE,
    payload: itemId
  }
}