import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:5000/api/v1";
const AUTH_TOKEN =
  localStorage.getItem("token") ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJAZ21haWwuY29tIiwiZW1haWwiOjEsInJvbGUiOjEsImlhdCI6MTY3MzAwMTAxNiwiZXhwIjoxNjczMDg3NDE2fQ.HDCwfnkrpC-szihnvfu7TC7K7TSbMt7V-PIVJJndyqw";

let config = {
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer: ${AUTH_TOKEN}`,
    "access-control-allow-methods":
      "GET, PUT, POST, DELETE, OPTIONS, POST, GET, OPTIONS, DELETE, PUT, PATCH",
    accept: "*/*",
    "access-control-max-age": "3600, 3600",
    "access-control-allow-headers":
      "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN, Authorization, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers",
  },
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
