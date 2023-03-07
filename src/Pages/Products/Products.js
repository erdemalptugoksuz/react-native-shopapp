import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';

import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import ProductCard from '../../Components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const {loading, data, error} = useFetch(Config.API_URL);

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
