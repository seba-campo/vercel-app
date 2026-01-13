import { selector } from "recoil";
import { authTokenState } from "./atoms";

export const userState = selector({
  key: "UserState",
  get: async ({ get }) => {
    if (!get(isLoggedState)) return null;

    const res = await fetch(`/api/me`, {
      headers: {
        Authorization: localStorage.getItem("vapp-token") ?? "",
      },
    });

    if (res.status == 401) return null;
    return res.json();
  },
});


export const isLoggedState = selector({
  key: "IsLogged",
  get: ({ get }) => {
    return Boolean(get(authTokenState));
  },
})
