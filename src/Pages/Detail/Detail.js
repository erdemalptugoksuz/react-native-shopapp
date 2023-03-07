import React from 'react';
import {View, Text, Image} from 'react-native';
import Config from 'react-native-config';

import Error from '../../Components/Error';
import Loading from '../../Components/Loading';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.style';

const Detail = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price} ₺</Text>
      </View>
    </View>
  );
};

export default Detail;
