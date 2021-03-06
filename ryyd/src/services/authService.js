import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export async function forgotPassword(email) {
  const data = await http.post(apiUrl + "/forgotPassword", { email });
  return data;
}
export async function resetPassword(newPassword) {
  const data = await http.post(apiUrl + "/resetPassword", newPassword);
  return data;
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
  forgotPassword,
  resetPassword,
};
