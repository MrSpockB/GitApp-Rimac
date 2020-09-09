const URL = "https://api.github.com";

export const findUser = userName => {
  const endpointURL = `${URL}/users/${userName}`;
  const options = {
    method: 'GET',
    headers: {
      'Accept': "application/vnd.github.v3+json"
    }
  };
  return fetch(endpointURL, options)
    .then(response => response.json());
};
