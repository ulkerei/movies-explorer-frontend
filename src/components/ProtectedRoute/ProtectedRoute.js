import React from "react";
import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({loggedOn, children, ...props}) => {
  return (
    <Route {...props}>
      {loggedOn ? children : <Redirect to="/signin" />}
    </Route>
  );
};

export default ProtectedRoute;