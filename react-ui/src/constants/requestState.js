export const success = {
  isFetching: false,
  isFetched: true,
  isError: false,
};

export const failure = (error) => ({
  isFetching: false,
  isFetched: true,
  isError: true,
  error,
});
