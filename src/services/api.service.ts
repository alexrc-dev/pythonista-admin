import axios, {AxiosRequestHeaders, Method} from "axios";
import {API_PATH} from "../app.config";

const requestApiResource = (path: string, method: Method, data: any | null, headers: AxiosRequestHeaders = {}) => {
  // console.log("Request", path)
  return axios(`${API_PATH}${path}`, {
    method: method,
    data,
    headers
  });
}

export default requestApiResource;
