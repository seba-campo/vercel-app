import { atom } from "recoil";

export const authTokenState = atom<string | null>({
  key: "AuthToken",
  default: typeof window !== "undefined"
    ? localStorage.getItem("vapp-token")
    : null,
});
