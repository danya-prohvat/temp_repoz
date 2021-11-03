import { BrowserRouter, Switch } from 'react-router-dom';
import { CommonLayout } from 'components/layout/commonLayout';
import { Authorize } from 'components/layout/authorize';
import { Main } from 'components/layout/main';
import { Page404 } from 'components/pages/page404';
import { locations } from './locations';
import { links } from 'components/core/sidebar/links';
import { PrivateRoute } from './privateRoute';
import { MyAccount } from 'components/pages/myAccount';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path={'/' + locations.signIn}>
          <CommonLayout>
            <Authorize authorizeType="Sign In"></Authorize>
          </CommonLayout>
        </PrivateRoute>
        <PrivateRoute path={'/' + locations.signUp}>
          <CommonLayout>
            <Authorize authorizeType="Sign Up"></Authorize>
          </CommonLayout>
        </PrivateRoute>
        {links.map((link) => {
          return (
            <PrivateRoute key={link.link} path={'/' + link.link} exact>
              <CommonLayout>
                <Main>{link.text}</Main>
              </CommonLayout>
            </PrivateRoute>
          );
        })}
        <PrivateRoute path={'/' + locations.user}>
          <CommonLayout>
            <Main>
              <MyAccount />
            </Main>
          </CommonLayout>
        </PrivateRoute>
        <PrivateRoute path="*">
          <CommonLayout>
            <Main>
              <Page404 />
            </Main>
          </CommonLayout>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};
