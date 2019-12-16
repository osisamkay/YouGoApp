import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card, CardItem, Button} from 'native-base';
import Benz from '../../Assets/benz2.svg';

const __UpcomingRides = () => {
  return (
    <Card style={styles.container}>
      <CardItem>
        <View>
          <Image
            source={require('../../Assets/toyo.png')}
            resizeMode="contain"
          />
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
    paddingRight: 17,
  },
  details: {
    marginBottom: 5,
  },
  btn: {
    // width: '45%',
    height: 27,
    backgroundColor: '#673AB7',
    alignItems: 'center',
    borderRadius: 15,
    marginRight: 5,
    justifyContent: 'center',
    marginTop: 5,
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
    // flexWrap: 'wrap',
  },
  label: {
    fontSize: 11,
    color: '#673AB7',
    fontWeight: 'bold',
  },
  txt: {
    color: '#373737',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
