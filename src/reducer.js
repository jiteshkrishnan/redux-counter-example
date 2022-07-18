function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      sleep(1000);
      return state + 1;
    default:
      return state;
  }
};

export default counterReducer;
