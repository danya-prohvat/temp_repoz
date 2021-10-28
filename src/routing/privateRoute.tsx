import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from 'hooks/useTypedSelector';
import { checkAuthorization } from 'store/UserSlice';
import { links } from './locations';

export const PrivateRoute: React.FC<RouteProps> = ({ path, ...props }) => {
  const isAuthorized = useSelector(checkAuthorization);

  if ((path === links.signIn || path === links.signUp) && isAuthorized) return <Redirect to={links.home} />;
  else if ((path === links.home || path === '*') && !isAuthorized) return <Redirect to={links.signIn} />;

  return <Route {...props} />;
};
