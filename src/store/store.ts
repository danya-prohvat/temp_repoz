import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { UserSlice, UserStore } from './UserSlice';
import { UiSlice, UiStore } from './UiSlice';

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
});
persistStore(store);

export type State = {
  user: UserStore;
  ui: UiStore;
};

export type RootState = ReturnType<typeof store.getState>;
