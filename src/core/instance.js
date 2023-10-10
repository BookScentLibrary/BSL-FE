import axios from "axios";
import { config } from "./config";

export const instance = axios.create({
  baseURL: config.server.host,

  headers: {
    "content-type": "application/json; charset=UTF-8",
    accept: "application/json",
  },
  withCredentials: false,
});

export const instances = axios.create({
  baseURL: config.server.host,

  headers: {
    "Content-Type": "multipart/form-data",
    accept: "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const Token = sessionStorage.getItem("token");

    config.headers = {
      "content-type": "application/json;charset=UTF-8",
      accept: "application/json",
      Authorization: `Bearer ${Token}`,
    };
    return config;
  },
  (err) => {
    console.log(err);
  }
);

instances.interceptors.request.use(
  (config) => {
    const Token = sessionStorage.getItem("token");

    config.headers = {
      "Content-Type": "multipart/form-data",
      accept: "application/json",
      Authorization: `Bearer ${Token}`,
    };
    return config;
  },
  (err) => {
    console.log(err);
  }
);

instance.interceptors.response.use(
  (success) => {
    const response = success.data;

    if (
      response.statusCode === 200 &&
      response.responseMessage === "조회 성공"
    ) {
      return response.posts;
    }

    return success;
  },
  (error) => {
    console.log(error);

    if (error.response.status === 404) {
      alert.fire("결과를 찾을 수 없습니다.");
    }

    return error;
  }
);
