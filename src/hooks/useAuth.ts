import { getAuth, removeAuth, setAuthAll } from "@/utils/helpers/cookies";

export type TAuthState = {
  token: string;
  user: any;
  is_loggedIn: boolean;
};

export default function useAuth() {
  const setAuthInfo = (payload: TAuthState) => {
    setAuthAll(payload);
  };

  const getAuthInfo = (): TAuthState => {
    const stored = getAuth();
    return {
      token: stored?.token ?? "",
      user: stored?.user ?? {},
      is_loggedIn: stored?.is_loggedIn ?? false,
    };
  };

  const removeAuthInfo = () => {
    removeAuth();
  };

  return {
    setAuthInfo,
    removeAuthInfo,
    auth: getAuthInfo(),
  };
}
