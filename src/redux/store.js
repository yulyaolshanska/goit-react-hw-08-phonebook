import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import { filterReducer } from 'redux/filterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';

// import { persistedReducer } from './contactsSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import authSlice from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['token'],
};

export const persistedReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

    contactsApi.middleware,
  ],
});

// setupListeners(store.dispatch);
export const persistor = persistStore(store);
