import { atom } from "recoil";

export const authTokenState = atom<string | null>({
  key: "AuthToken",
  default: typeof window !== "undefined"
    ? localStorage.getItem("vapp-token")
    : null,
});

export const userIdState = atom<string | null>({
  key: "UserId",
  default: ""
});

export const userEmailState = atom<string | null>({
  key: "UserEmail",
  default: ""
});