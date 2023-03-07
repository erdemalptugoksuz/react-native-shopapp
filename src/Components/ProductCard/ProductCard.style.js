import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'aqua',
    margin: 10,
    borderWidth: 1,
    borderColor: '#bdbdbd',
  },
  image: {
    backgroundColor: 'white',
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
  },
  bodyContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    textAlign: 'right',
    fontSize: 16,
    fontStyle: 'italic',
  },
});
