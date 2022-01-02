import { Redirect, Route } from "react-router-dom";
import { ROUTES } from "../../constants";

export function PrivateRoute({ auth, ...rest }) {
  return auth ? (
    <Route {...rest} />
  ) : (
    <Redirect to={`${ROUTES.SIGN_IN}/sign-up`} />
  );
}
