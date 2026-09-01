import { request } from "./client";

export function signup(email, password) {
  return request("/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function login(email, password) {
  return request("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function googleLogin(idToken) {
  return request("/auth/google", {
    method: "POST",
    body: JSON.stringify({ idToken }),
  });
}