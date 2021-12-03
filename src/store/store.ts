import { configureStore, getDefaultMiddleware, Middleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { config } from 'config';
import { UserSlice } from './UserSlice';
import { AnotherUserSlice } from './AnotherUserSlice';
import { UiSlice, startLoading, endLoading } from './UiSlice';
import { PostSlice } from './PostSlice';

const persistConfig = {
  key: 'app',
  storage: storage,
  blacklist: ['loading'],
};

const loader: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type.includes(config.constants.initialLoading)) {
    if (action.type.includes('pending')) store.dispatch(startLoading());
    if (action.type.includes('rejected') || action.type.includes('fulfilled')) store.dispatch(endLoading());
  }

  return result;
};

const middleware: any = [...getDefaultMiddleware<RootState>(), loader];

const persistedReducer = persistReducer(persistConfig, UiSlice.reducer);

export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    anotherUser: AnotherUserSlice.reducer,
    ui: persistedReducer,
    post: PostSlice.reducer,
  },
  middleware,
});

persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
