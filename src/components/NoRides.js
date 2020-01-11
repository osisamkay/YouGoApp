import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Benz from '../../Assets/benz.svg';
import {Card, CardItem, Button} from 'native-base';
import Caution from '../../Assets/caution.svg';

const NoRides = () => {
  return (
    <Card style={styles.container}>
      <CardItem>
        <Caution />
      </CardItem>
      <CardItem>
        <View>
          <Text style={styles.text1}>No upcoming rides</Text>
          <Text style={styles.text}>Click the get a Ride button below</Text>
        </View>
      </CardItem>
    </Card>
  );
};

export default NoRides;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text1: {
    textAlign: 'center',
    color: '#7D7D7D',
    fontSize: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
  },
});
