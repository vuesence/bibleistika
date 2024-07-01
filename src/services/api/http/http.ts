// import axios from "axios";
// import type { AxiosRequestConfig } from "axios";
// import HttpRequest from "./xhr";

import { useAppLoader } from "@/composables/useAppLoader";

const { startLoading, stopLoading } = useAppLoader();

interface IOptions {
  baseUrl: string;
  headers?: Record<string, string>;
  token?: Function;
  logout?: Function;
}

let options: IOptions = { baseUrl: "/" };

const http = {
  setOptions(_options: IOptions) {
    options = _options;
  },

  async post(data: any, uri: string) {
    if (options.token && options.token()) {
      options.headers = options.headers || {};
      options.headers.Authorization = `Bearer ${options.token()}`;
    }
    return postFetch(data, uri);
    // return postXhr(data, uri);
    // return postAxios(data, uri);
  },

  async get(url: string, raw: boolean = false) {
    try {
      startLoading();
      return raw
        ? await fetch(url)
        : await fetch(url).then((response) => response.json());
    } catch (error) {
      console.log(error);
    } finally {
      stopLoading();
    }
  },
};

async function postFetch(data: any, uri: string) {
  const url = uri.startsWith("http") ? uri : `${options.baseUrl}${uri}`;
  return fetch(url, {
    method: "POST",
    headers: options.headers,
    // credentials: "include",
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

export default http;
