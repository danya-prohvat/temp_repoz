export const env = {
  useMock: Boolean(process.env.REACT_APP_USE_MOCK) || true,
  apiBaseUrl: String(process.env.REACT_APP_API_BASE_URL) || '/',
  apiDelay: Number(process.env.REACT_APP_API_DELAY) || 1000,
  axiosTimeout: Number(process.env.REACT_APP_API_AXIOS_TIMEOUT) || 4000,
  externalLink: String(process.env.REACT_APP_API_EXTERNAL_LINK) || '#',
  useLogger: Boolean(process.env.REACT_APP_USE_LOGGER) || false,
};
