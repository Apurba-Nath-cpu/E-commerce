import { configureStore, } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// const stripe = require('stripe')('sk_test_51MQ4pCSH8VHi5UreVEtJApEKlUDR3mNlqrreCQCmezzGgIW9761xZ5ISkLexOWd3k38lLcDrB8ZNN3b6VxEQjfrh00JrkDrsG9');

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store);

