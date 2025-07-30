import Cookies from "js-cookie";

export type TAuthCookies = {
  token: string;
  user: Record<string, any>;
  is_loggedIn: boolean;
};

export type AuthCookieKey = "token" | "user" | "is_loggedIn";

const DEFAULT_EXPIRE = 8 / 24; // 8 hours

function safeParse<T>(value: string | undefined, fallback: T): T {
  if (!value || value === "undefined") return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function setAuthCookie(
  key: AuthCookieKey,
  value: any,
  expire?: number
): void {
  Cookies.set(key, JSON.stringify(value), {
    expires: expire ?? DEFAULT_EXPIRE,
    secure: false,
    sameSite: "Lax",
  });
}

export function getAuthCookie(key: AuthCookieKey): any {
  return safeParse(
    Cookies.get(key),
    key === "is_loggedIn" ? false : key === "user" ? {} : ""
  );
}

export function getAuth(): TAuthCookies {
  return {
    token: getAuthCookie("token"),
    user: getAuthCookie("user"),
    is_loggedIn: getAuthCookie("is_loggedIn"),
  };
}

export function setAuthAll(payload: TAuthCookies, expire?: number): void {
  setAuthCookie("token", payload.token, expire);
  setAuthCookie("user", payload.user, expire);
  setAuthCookie("is_loggedIn", payload.is_loggedIn, expire);
}

export function removeAuth(): void {
  ["token", "user", "is_loggedIn"].forEach((key) => Cookies.remove(key));
}
