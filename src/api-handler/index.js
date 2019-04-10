import axios from "axios";

const SERVER_DOMAIN = process.env.REACT_APP_API_ENDPOINT;

export const get = () => {
  console.log(`fetching from api-handler~~~>`, SERVER_DOMAIN);

  return new Promise((resolve, reject) => {
    axios
      .get(`${SERVER_DOMAIN}`)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};
