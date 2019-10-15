import { useState, useEffect } from "react";
import { isLoggedIn } from "../services/auth.service";
import { useSelector } from "react-redux";
import { selectUsername, selectUserRoles } from "../ducks";

export const useAuthStatus = () => {
  const [isAuth, setIsAuth] = useState(false);
  const username = useSelector(selectUsername);
  const checkAuth = () => {
    isLoggedIn() ? setIsAuth(true) : setIsAuth(false);
  };

  useEffect(() => {
    checkAuth();
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
