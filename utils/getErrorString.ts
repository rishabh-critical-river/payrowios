const getErrorString = (error: any) => {
  if (error.response) {
    return error.response.data.message;
  }
  return error.message;
};

export default getErrorString;
