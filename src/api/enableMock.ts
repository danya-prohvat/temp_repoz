import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { apiUrls } from './urls';
import { config } from 'config/index';

export const enableMock = (): void => {
  const mock = new MockAdapter(axios, { delayResponse: config.env.apiDelay });

  mock.onGet(apiUrls.getVersion.url).reply(() => {
    return [200, 'from .json'];
  });
};
