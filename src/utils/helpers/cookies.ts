import Cookies from "js-cookie";

export type TAuthCookies = {
  token: string;
  user: any;
  is_loggedIn: boolean;
};

export type TSetAuthCookies = {
  data: string;
  name: "token" | "user" | "is_loggedIn";
  expire?: number;
};

export const setAuth = ({ data, name, expire }: TSetAuthCookies): void => {
  const temp_expire = expire ? expire : 8 / 24; // default: 8 hours
  Cookies.set(name, data, {
    expires: temp_expire,
    secure: false,
    sameSite: "Lax",
  });
};

export const getAuth = (): TAuthCookies => {
  const token = Cookies.get("token") ?? null;
  const user = Cookies.get("user") ?? null;
  const is_loggedIn = Cookies.get("is_loggedIn") ?? false;
  return {
    token: token ? JSON.parse(token) : "",
    user: user ? JSON.parse(user) : {},
    is_loggedIn: is_loggedIn ? JSON.parse(is_loggedIn) : false,
  };
};

export const removeAuth = (): void => {
  Cookies.remove("token");
  Cookies.remove("user");
  Cookies.remove("is_loggedIn");
};
