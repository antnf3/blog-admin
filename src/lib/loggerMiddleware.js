const loggerMiddleware = (store) => (next) => (action) => {
  console.log(store.getState());

  console.log(action);
  const result = next(action);
  console.log(store.getState());
  return result;
};

export default loggerMiddleware;
