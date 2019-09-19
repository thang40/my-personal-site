import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { UserDetailRoute } from "./user-details/user-details.route";
import { logoutAction } from "../../ducks";
import { useAuthStatus } from "../../hooks/commonHooks";
import { connect } from "react-redux";

const UserRouteInner = ({ logoutAction }) => {
  const isAuth = useAuthStatus(true);
  const handleLogout = () => {
    logoutAction();
  };

  return (
    <React.Fragment>
      {isAuth ? null : <Redirect to="/login" />}
      <div>
        user
        <Link to="/user/details">Details</Link>
        <button onClick={handleLogout}>log out</button>
        <Route path="/user/details" exact component={UserDetailRoute} />
      </div>
    </React.Fragment>
  );
};

export const UserRoute = connect(
  () => {
    return {};
  },
  {
    logoutAction: logoutAction
  }
)(UserRouteInner);
