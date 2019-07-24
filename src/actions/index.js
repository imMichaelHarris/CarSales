export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = item => {
    console.log('add')
  return {
    type: ADD_FEATURE,
    payload: item
  };
};
