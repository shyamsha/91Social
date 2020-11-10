import config from "../config/app";
// import requestConfig from "../config/request";
import * as API from "../utils/api-helper";

const isProd: boolean = config.isProd;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.staging.api_endpoint;

export const getHistory = (params:{limit:number,offset:number}) => {
  const url = `${API_ENDPOINT}/history?limit=${params.limit}&offset=${params.offset}`;
  return API.get(url);
};

export const getPayload = (params:{limit:number,offset:number}) => {
  const url = `${API_ENDPOINT}/payloads?limit=${params.limit}&offset=${params.offset}`;
  return API.get(url);
};
