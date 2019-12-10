import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Button, Text} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// const {width} = Dimensions.get('screen'); // to get screen dimension (width and height)

const AllButton = ({title, handlePress, status}) => {
  return (
    <Button
      style={styles.button}
      disabled={status ? false : true}
      onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </Button>
  );
};

export default AllButton;

const styles = StyleSheet.create({
  button: {
    width: wp('91%'),
    // maxWidth: 500,
    paddingHorizontal: 12,
    height: 50,
    backgroundColor: '#673AB7',
    justifyContent: 'center',
    borderRadius: 6,
    fontFamily: 'Roboto',
  },
  text: {
    textTransform: 'capitalize',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});
