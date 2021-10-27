import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'hooks/useTypedSelector';
import { checkAuthorization } from 'store/UserSlice';
import { links } from './locations';

export const PrivateRoute: React.FC = (props) => {
  const isAuthorized = useSelector(checkAuthorization);

  if (!isAuthorized) {
    return <Redirect to={links.signIn} />;
  }
  return <Route {...props} />;
};
