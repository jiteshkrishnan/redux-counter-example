export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const callApi = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 1000)
  );

export const asyncIncrement = () => async (dispatch, getState) => {
  await callApi();
  dispatch(increment());
};
