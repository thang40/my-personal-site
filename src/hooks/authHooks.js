import { useState, useEffect } from "react";
import { isLoggedIn } from "../services/auth.service";
import { useSelector } from "react-redux";
import { selectUsername, selectUserRoles } from "../ducks";

export const useAuthStatus = authStatus => {
  const [isAuth, setIsAuth] = useState(authStatus);
  const username = useSelector(selectUsername);
  const checkAuth = async () => {
    (await isLoggedIn()) ? setIsAuth(true) : setIsAuth(false);
  };

  useEffect(() => {
    checkAuth();
    return () => {
      console.log("clean up");
    };
  }, [username]);
  return isAuth;
};

export const useRightStatus = roles => {
  const [hasRight, setHasRight] = useState(false);
  const userRoles = useSelector(selectUserRoles);
  useEffect(() => {
    setHasRight(userRoles.some(r => roles.includes(r)));
    return () => {
      console.log("clean up");
    };
  }, [userRoles, roles]);
  return hasRight;
};
