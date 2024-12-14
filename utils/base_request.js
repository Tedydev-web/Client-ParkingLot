import axios from "axios";
const { CancelToken } = axios;

export const GET = (url, params, options = {}) => {
  let cancel;
  let promise = new Promise((resolve, reject) => {
    axios.get(`${options.host_name || API_GATEWAY_URL}${url}`, {
      params: {
        ...params,
        api_key: options.api_key || API_KEY
      },
      cancelToken: new CancelToken(function executor(c) {
        cancel = c;
      })
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
  promise.cancel = cancel;
  return promise;
} 
