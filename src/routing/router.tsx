import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './privateRouter';
import { links } from './locations';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={links.home} exact>
        <PrivateRoute>
          <div className="wrapper">
            <div>HOME</div>
          </div>
        </PrivateRoute>
      </Route>
      <Route path={links.signIn}>
        <div className="wrapper">
          <div>signIn</div>
        </div>
      </Route>
      <Route path={links.signUp}>
        <div className="wrapper">
          <div>signUp</div>
        </div>
      </Route>
      <Route path="*">
        <div className="wrapper">
          <div>404</div>
        </div>
      </Route>
    </Switch>
  </BrowserRouter>
);
