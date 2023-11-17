import type { LoginParams } from "lib/types/auth";

import instance, { fetchWrapper } from "./api_client";

export const login = (params: LoginParams) => {
  return fetchWrapper.post("/auth/login", params);
};
