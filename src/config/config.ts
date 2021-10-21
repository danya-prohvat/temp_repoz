export const env = {
  useMock: Boolean(process.env.REACT_APP_USE_MOCK) || true,
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || '/',
  apiDelay: Number(process.env.REACT_APP_API_DELAY) || 1000,
};
