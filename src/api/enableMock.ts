import MockAdapter from 'axios-mock-adapter';
import { apiUrls } from './urls';
import { config } from 'config';
import { instance } from './apiClient';
import { version } from './mocks';
import { users } from './mocks';

export const enableMock = (): void => {
  const mock = new MockAdapter(instance, { delayResponse: config.env.apiDelay });

  mock.onGet(apiUrls.getVersion.url).reply(() => {
    return [200, version];
  });
  mock.onPost(apiUrls.signIn.url).reply((config) => {
    for (const user of users)
      if (user.email === JSON.parse(config.data).email && user.password === JSON.parse(config.data).password)
        return [200, user.user];

    return [401, ''];
  });
};
