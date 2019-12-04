import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, CardItem, Button} from 'native-base';
import Benz from '../../Assets/benz2.svg';

const __UpcomingRides = () => {
  return (
    <Card style={styles.container}>
      <CardItem>
        <View>
          <Benz />
          <Text style={styles.label}>Model</Text>
          <Text style={styles.txt}>Toyota Camry 2015</Text>
        </View>
      </CardItem>
      <CardItem style={styles.detailGroup}>
        <View style={styles.details}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.txt}>January 24 2020</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.label}>Duration</Text>
          <Text style={styles.txt}>2 Days</Text>
        </View>
        <View style={styles.btnGroup}>
          <Button style={styles.btn}>
            <Text style={styles.btntxt}>Top-Up Ride</Text>
          </Button>
          <Button style={styles.btn}>
            <Text style={styles.btntxt}>Cancel Ride</Text>
          </Button>
        </View>
      </CardItem>
    </Card>
  );
};

export default __UpcomingRides;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  detailGroup: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  details: {
    marginBottom: 5,
  },
  btn: {
    width: 85,
    height: 27,
    backgroundColor: '#673AB7',
    alignItems: 'center',
    borderRadius: 15,
    marginRight: 5,
    justifyContent: 'center',
  },
  btntxt: {
    color: 'white',
    textAlign: 'center',
    padding: 5,
    fontSize: 11,
    fontWeight: 'bold',
  },
  btnGroup: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 11,
    color: '#673AB7',
    fontWeight: 'bold',
  },
  txt: {
    color: '#373737',
    fontWeight: 'bold',
  },
});
