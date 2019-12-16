import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardItem} from 'native-base';
import Call from '../../Assets/call.svg';
import Topup from '../../Assets/topup.svg';

const CurrentRideCard = ({makeCall, TopUp}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <CardItem>
          <TouchableOpacity style={styles.center} onPress={makeCall}>
            <Call />
            <Text style={styles.action}>Call Driver</Text>
          </TouchableOpacity>
        </CardItem>
        <View style={styles.middle}>
          <View>
            <Text style={styles.car}>TOYOTA PRADO 2015</Text>
            <View style={styles.center}>
              <Text style={styles.time}>2 days and 4 hrs</Text>
              <Text style={styles.timeLeft}>Time Left on Ride</Text>
            </View>
          </View>
        </View>
        <CardItem>
          <TouchableOpacity style={styles.center} onPress={TopUp}>
            <Topup />
            <Text style={styles.action}>Top Up</Text>
          </TouchableOpacity>
        </CardItem>
      </Card>
    </View>
  );
};

export default CurrentRideCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  center: {
    alignItems: 'center',
  },
  action: {
    color: '#673AB7',
    fontSize: 13,
    fontWeight: 'bold',
  },
  middle: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flexGrow: 2,
    borderColor: '#DCDCDC',
  },
  time: {
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'Roboto',
  },
  timeLeft: {
    fontSize: 11,
    fontFamily: 'Roboto',
  },
  car: {
    fontSize: 11,
    padding: 5,
    fontFamily: 'Roboto',
  },
});
