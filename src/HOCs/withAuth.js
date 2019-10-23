import React from "react";
import { useAuthStatus } from "../hooks/authHooks";

export const withAuth = (Comp, defaultStatus) => {
  return React.forwardRef((props, ref) => {
    const isAuth = useAuthStatus(defaultStatus);
    return <Comp isAuth={isAuth} {...props} ref={ref} />;
  });
};
