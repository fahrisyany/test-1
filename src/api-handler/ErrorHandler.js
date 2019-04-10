export const errorHandler = error => {
  let message;
  console.log(`errorHandler===>`, error);

  switch (error.response.status) {
    case 500:
      return (message = "Internal Server Error");
    case 404:
      return (message = "Page not found :(");
    case 401:
      return (message = "Invalid credentials");
    default:
      return (message = "Something went wrong");
  }
};
