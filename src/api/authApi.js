import axios from "axios";

const authApi = {}


const BASE_URL = " http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com";

authApi.register = (input)  => {
  return axios.post(`${BASE_URL}/api/V1/auth/register`, input);
};

authApi.login = (input)  => {
  return axios.post(`${BASE_URL}/api/V1/auth/login`, input);
};

authApi.getMe = ()  => {
  return axios.get(`${BASE_URL}/api/V1/auth/me`);
};

export default authApi;

