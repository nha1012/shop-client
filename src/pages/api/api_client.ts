
import axios, { AxiosRequestConfig } from 'axios';
import { getCookie } from 'lib/helpers/cookie';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const instance = axios.create({
  baseURL: publicRuntimeConfig.baseURL,
});

function get(url: string) {
  const requestOptions: AxiosRequestConfig = {
      url,
      method: 'GET',
      headers: {
        "Authorization": getCookie('access_token'),
      }
  };
  return instance.request(requestOptions);
}

function post(url: string, params: any) {
  const requestOptions: AxiosRequestConfig = {
      url,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Authorization": getCookie('access_token')},
      params: params
  };
  return instance.request(requestOptions);

}

function put(url: string, params: any) {
  const requestOptions: AxiosRequestConfig = {
      url,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', "Authorization": getCookie('access_token')},
      params: params
  };
  return instance.request(requestOptions);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url: string) {
  const requestOptions = {
      url,
      method: 'DELETE',
      headers: { "Authorization": getCookie('access_token')},
  };
  return instance.request(requestOptions);
}

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete
};


export default instance;
