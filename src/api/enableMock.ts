import MockAdapter from 'axios-mock-adapter';
import { omit } from 'lodash';
import { config } from 'config';
import { apiUrls } from './urls';
import { instance } from './apiClient';
import { version } from './mocks';
import { users } from './mocks';

export const enableMock = (): void => {
  const mock = new MockAdapter(instance, { delayResponse: config.env.apiDelay });

  mock.onGet(apiUrls.getVersion.url).reply(() => {
    return [200, version];
  });

  mock.onPost(apiUrls.signIn.url).reply((config) => {
    const data = JSON.parse(config.data);

    const user = users.find((user) => user.email === data.email && user.password === data.password);
    if (user) return [200, omit(user, ['password'])];

    return [401, 'email or password is incorrect'];
  });

  mock.onPost(apiUrls.signUp.url).reply((config) => {
    const data = JSON.parse(config.data);

    if (data.email === 'test@gmail.com') return [400, 'bad request'];

    return [201, omit(data, ['password'])];
  });

  mock.onPost(apiUrls.checkNewUserName.url).reply((config) => {
    const data = JSON.parse(config.data);

    if (!users.find((user) => user.userName === data.userName)) return [200, `such user name isn't exist`];

    return [400, 'such user name is exist'];
  });
};
