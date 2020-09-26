import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/users";

export async function register(data) {
  return await http.post(apiEndPoint, data);
}

export default {
  register,
};
