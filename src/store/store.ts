import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { UserSlice } from './UserSlice';
import { UiSlice } from './UiSlice';

const persistConfig = {
  key: 'app',
  storage: storage,
  whitelist: ['ui'],
};

const reducers = combineReducers({
  user: UserSlice.reducer,
  ui: UiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
