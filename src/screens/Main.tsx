import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useLazyGetProductsQuery} from '../services/ProductService';
import Icon from '../assets/icons/category.svg';

const Main = () => {
  const [getProducts] = useLazyGetProductsQuery();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      // const {isSuccess, data} = await getProducts({});
      // if (isSuccess) {
      //   setProducts(data);
      // }
    })();
  });

  return (
    <View style={styles.container}>
      <Icon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
