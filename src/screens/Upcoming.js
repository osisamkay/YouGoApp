import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import __UpcomingRides from '../components/__UpcomingRides';

const Upcoming = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.card}>
          <__UpcomingRides />
          <__UpcomingRides />
          <__UpcomingRides />
        </View>
      </View>
    </View>
  );
};

export default Upcoming;

const styles = StyleSheet.create({
  view: {
    height: '90%',
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  card: {
    marginHorizontal: 17,
    marginTop: 17,
  },
});
