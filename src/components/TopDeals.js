import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Sad from '../../Assets/topride.svg';
import {Button} from 'native-base';

const TopDeals = ({title, price}) => {
  return (
    <View style={{paddingBottom: 9, paddingRight: 9}}>
      <View style={styles.cardContainer}>
        <Sad />
        <View style={{justifyContent: 'space-evenly'}}>
          <Text style={styles.dealText}>{title}</Text>
          {/* <Text style={styles.dealText}>{price}</Text> */}
          <Button style={styles.button}>
            <Text style={styles.buttonText}>Get Now </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default TopDeals;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: 308,
    paddingVertical: 9,
    paddingHorizontal: 7,
  },
  upcomimgGroup: {
    justifyContent: 'space-between',
    paddingVertical: 9,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#673AB7',
    borderRadius: 5,
    height: 35,
  },
  dealText: {
    fontWeight: 'bold',
  },
});
