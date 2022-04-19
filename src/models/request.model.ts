import {AxiosError} from "axios";

export interface RequestModel<T> {
  data: T,
  mutate: any,
  error: AxiosError,
  loading: boolean
}
