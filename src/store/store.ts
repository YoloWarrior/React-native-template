import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productReducer from './reducers/ProductSlice';
import {productApi} from '../services/ProductService';

const rootReducer = combineReducers({
  productReducer,
  [productApi.reducerPath]: productApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({serializableCheck: false}).concat(
        productApi.middleware,
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
