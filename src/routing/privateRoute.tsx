import { useEffect } from 'react';
import { Route, RouteProps, Redirect, RedirectProps } from 'react-router-dom';
import { useSelector } from 'hooks/useTypedSelector';
import { checkAuthorization, getUserInfo } from 'store/UserSlice';
import { locations } from './locations';
import { unathorizedOnlyLinks } from './unathorizedOnlyLinks';

export const PrivateRoute: React.FC<RouteProps & { exact?: true }> = ({ path, ...props }) => {
  const isAuthorized = useSelector(checkAuthorization);
  const { actualToken } = useSelector(getUserInfo);
  const token = localStorage.getItem('token');

  useEffect((): RedirectProps => {
    if (!localStorage.getItem('token')) return <Redirect to={locations.signIn} />;
  }, [actualToken]);

  if (unathorizedOnlyLinks.includes(String(path?.slice(1))) && isAuthorized) return <Redirect to={locations.home} />;
  else if (!isAuthorized && !unathorizedOnlyLinks.includes(String(path?.slice(1))) && !token)
    return <Redirect to={locations.signIn} />;

  return <Route {...props} />;
};
