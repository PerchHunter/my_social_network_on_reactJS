import { Redirect, Route } from "react-router-dom";
import { ROUTES } from "../../constants";

export function PublicRoute({ auth, ...rest }) {
  return !auth ? <Route {...rest} /> : <Redirect to={ROUTES.HOME} />;
}
