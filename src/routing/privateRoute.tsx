import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from 'hooks/useTypedSelector';
import { checkAuthorization } from 'store/UserSlice';
import { locations } from './locations';
import { availableLinks } from './availableLinks';

export const PrivateRoute: React.FC<RouteProps> = ({ path, ...props }) => {
  const isAuthorized = useSelector(checkAuthorization);

  if (availableLinks.includes(String(path?.slice(1))) && isAuthorized) return <Redirect to={locations.home} />;
  else if (!isAuthorized && !availableLinks.includes(String(path?.slice(1)))) return <Redirect to={locations.signIn} />;

  return <Route {...props} />;
};
