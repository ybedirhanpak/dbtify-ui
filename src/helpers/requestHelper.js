import fetch from "isomorphic-unfetch";

const API_URL = "http://localhost:5000/api";

const getRequestURL = (url) => {
  return url.startsWith("/") ? `${API_URL}${url}` : `${API_URL}/${url}`;
};

export const Post = (url, body) => {
  const requestURL = getRequestURL(url);
  return fetch(requestURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const Get = (url) => {
  const requestURL = getRequestURL(url);
  return fetch(requestURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const Success = (response) => {
  return response.status >= 200 && response.status < 300;
};
