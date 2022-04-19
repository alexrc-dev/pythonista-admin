import {getToken} from "./credentials.service";
import requestApiResource from "./api.service";
import {ClientStats, ClientModel} from "../models/client.model";
import useSwr from "swr";
import {AxiosError} from "axios";
import {RequestModel} from "../models/request.model";

const fetcher = (url: string) => {
  const headers = {
    "Authorization": getToken() || '',
    "Accept": "application/json"
  };
  return requestApiResource(url, 'get', null, headers).then(r => r.data);
}

export const getClientDetails = async (): Promise<ClientModel> => {
  const headers = {
    "Authorization": getToken() || '',
    "Accept": "application/json"
  };
  return (await requestApiResource('/clients/me', 'get', null, headers)).data;
}

export const useClientStats = (): RequestModel<ClientStats> => {
  const {data, mutate, error} = useSwr('/clients/stats', fetcher);
  const loading = !error && !data;
  return {
    data, mutate, error, loading
  };
}
