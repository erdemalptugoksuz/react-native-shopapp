import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  bodyContainer: {
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  desc: {
    fontStyle: 'italic',
    marginVertical: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
