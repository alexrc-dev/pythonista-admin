import requestApiResource from "./api.service";
import {getToken} from "./credentials.service";
import {AUTH_HEADER} from "../app.config";
import {AxiosPromise} from "axios";

type LoginResponse = {
  access_token: string
  token_type: string
}

export const loginToApi = (username: string, password: string): AxiosPromise<LoginResponse> => {
  let headers = {
    "Authorization": `Basic ${AUTH_HEADER}`,
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let data = new FormData();
  data.append("username", username);
  data.append("password", password);
  return requestApiResource('/login/access-token', 'post', data, headers);
}

export const tokenValid = async (): Promise<boolean> => {
  const headers = {"Authorization": getToken() || ''};
  try {
    return !!(await requestApiResource('/login/test-token', 'post', null, headers)).data;
  } catch (e) {
    return false;
  }
}
