import { getAuth, removeAuth, setAuth } from "@/utils/helpers/cookies";
import { useState } from "react";

type TAuthState = {
  token: string;
  user: any;
  is_loggedIn: boolean;
};

export default function useAuth() {
  const [auth, setAuthState] = useState<TAuthState>(() => {
    const stored = getAuth();
    return {
      token: stored?.token ?? "",
      user: stored?.user ?? {},
      is_loggedIn: stored?.is_loggedIn ?? false,
    };
  });

  const setAuthInfo = (payload: TAuthState) => {
    setAuth({ data: JSON.stringify(payload.token), name: "token" });
    setAuth({ data: JSON.stringify(payload.user), name: "user" });
    setAuth({ data: JSON.stringify(payload.is_loggedIn), name: "is_loggedIn" });
    setAuthState(payload);
    localStorage.setItem("user", JSON.stringify(payload.user));
    localStorage.setItem("token", payload.token);
    localStorage.setItem("is_loggedIn", JSON.stringify(payload.is_loggedIn));
  };

  const getAuthInfo = () => {
    return {
      token: auth.token,
      user: auth.user,
      is_loggedIn: auth.is_loggedIn,
    };
  };

  const removeAuthInfo = () => {
    removeAuth();
    setAuthState({ token: "", user: {}, is_loggedIn: false });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("is_loggedIn");
  };

  return {
    setAuthInfo,
    getAuthInfo,
    removeAuthInfo,
    auth,
  };
}
