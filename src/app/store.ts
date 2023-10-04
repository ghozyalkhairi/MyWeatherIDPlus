import {configureStore} from '@reduxjs/toolkit';
import cuacaReducer from '../features/cuaca/cuacaSlice';
import lokasiReducer from '../features/lokasi/lokasiSlice';

export const store = configureStore({
  reducer: {
    cuaca: cuacaReducer,
    lokasi: lokasiReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
