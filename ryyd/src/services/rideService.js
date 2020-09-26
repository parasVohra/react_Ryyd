import http from "./httpService";
import { apiUrl } from "../config.json";

export async function publishRide(data) {
  return await http.post(apiUrl + "/publishRide", data);
}

export async function getRides() {
  return await http.get(apiUrl + "/getRides");
}

export async function searchRides(data) {
  return await http.post(apiUrl + "/searchRide", data);
}
export async function requestRide(data) {
  return await http.post(apiUrl + "/requestRide", data);
}
export async function getRequestRide() {
  return await http.get(apiUrl + "/getRequestRide");
}

export default {
  publishRide,
  getRides,
  searchRides,
  requestRide,
  getRequestRide,
};
