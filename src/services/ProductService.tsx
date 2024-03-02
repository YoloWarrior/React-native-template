import AsyncStorage from '@react-native-async-storage/async-storage';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'API URL',
    prepareHeaders: async headers => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${JSON.parse(token)}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    addProduct: builder.mutation({
      query: data => ({
        url: 'api/product',
        method: 'POST',
        body: data,
      }),
      transformResponse: data => {
        return data;
      },
      transformErrorResponse: data => {
        return data;
      },
    }),
    getProducts: builder.query({
      query: () => {
        return {
          url: '/api/product/list',
          method: 'GET',
        };
      },
    }),
  }),
});

export const {useAddProductMutation, useLazyGetProductsQuery} = productApi;

export const {endpoints, reducerPath, reducer} = productApi;
