import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { UserSlice } from './UserSlice';
import { AnotherUserSlice } from './AnotherUserSlice';
import { UiSlice } from './UiSlice';
import { PostSlice } from './PostSlice';

const persistConfig = {
  key: 'app',
  storage: storage,
  whitelist: ['ui'],
};

const reducers = combineReducers({
  user: UserSlice.reducer,
  anotherUser: AnotherUserSlice.reducer,
  ui: UiSlice.reducer,
  post: PostSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
