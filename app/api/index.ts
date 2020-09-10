import { UserData } from '../models/UserData';

const URL = "https://api.github.com";

const getCommonHeaders = () => {
  const base64Data = btoa(`${process.env.GITHUB_USERNAME}:${process.env.GITHUB_TOKEN}`);
  return {
    'Accept': "application/vnd.github.v3+json",
    'Authorization': 'Basic ' + base64Data
  }
};

const handleHTTPError = (response: any) => {
  return response.json()
    .then((data: any) => {
      if(!response.ok) {
        throw Error(data.message || 'HTTP error');
      }
      return data
    });
};

const findUser = (userName: string) => {
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

const getUserRepos = (userName: string) => {
  const endpointURL = `${URL}/users/${userName}/repos`;
  const options = {
    method: 'GET',
    headers: getCommonHeaders()
  };
  return fetch(endpointURL, options)
    .then(handleHTTPError)
    .then(repos => {
      return repos.map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        repoURL: repo.html_url
      }))
    });
}

export const getUserInfo = (userName: string): Promise<UserData> => {
  return findUser(userName)
    .then(userData => {
      return Promise.all([userData, getUserRepos(userName)])
    })
    .then(([userData, userRepos]) => {
      return {
        ...userData,
        repos: userRepos
      }
    });
};
