import { Route, Redirect } from 'react-router-dom';
import { links } from './locations';

const isSignedIn = false;

export const PrivateRoute: React.FC = (props) => {
  if (!isSignedIn) {
    return <Redirect to={links.signIn} />;
  }
  return <Route {...props} />;
};
