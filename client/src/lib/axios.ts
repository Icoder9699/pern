import { createStandaloneToast } from "@chakra-ui/react";
import axios from "axios";

const { toast } = createStandaloneToast();

const BASE_URL = import.meta.env.VITE_BASE_URL;
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
    console.log('config: ', config);
    
    if (config.method === "post") {
      toast({
        title: `Success`,
        description: "Operation successfuly finished",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }

    // Do something before request is sent
    return config;
  },
  (error) => {
    toast({
      title: `Error: ${error.response.status}`,
      description: error.response.data.message,
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
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
    console.log(error.response.data.message);
    toast({
      title: `Error: ${error.response.status}`,
      description: error.response.data.message,
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
