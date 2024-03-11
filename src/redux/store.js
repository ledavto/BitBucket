import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { presistReducerFarm } from './farm/farmSlice';
import { presistReducerProduct } from './product/productSlice';

export const store = configureStore({
  reducer: { farm: presistReducerFarm, product: presistReducerProduct },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
