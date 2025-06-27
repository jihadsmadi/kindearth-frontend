import api from "../api";

export const GetCSRF = async () => {
  return api.get("csrf-token");
};

export const login = async (credentials: { email: string; password: string }) => {
  return api.post("/auth/login", credentials);
};
export const register = async (credentials: { email: string; password: string;firstName: string;lastName: string }) => {
  return api.post("/auth/register", credentials);
};
export const logout = async () => {
  return api.post("/auth/logout", {});
};