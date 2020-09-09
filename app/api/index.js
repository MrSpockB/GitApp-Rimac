const URL = "https://api.github.com";

const getCommonHeaders = () => {
  const base64Data = btoa(`${process.env.GITHUB_USERNAME}:${process.env.GITHUB_TOKEN}`);
  return {
    'Accept': "application/vnd.github.v3+json",
    'Authorization': 'Basic ' + base64Data
  }
};


const handleHTTPError = response => {
  return response.json()
    .then(data => {
      if(!response.ok) {
        throw Error(data.message || 'HTTP error');
      }
      return data
    });
};

export const findUser = userName => {
  const endpointURL = `${URL}/users/${userName}`;
  const options = {
    method: 'GET',
    headers: getCommonHeaders()
  };
  return fetch(endpointURL, options)
    .then(handleHTTPError)
    .then(data => {
      return {
        userName: data.login,
        profilePictureURL: data.avatar_url,
        email: data.email,
        profileURL: data.html_url
      }
    });
};
