import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Benz from '../../Assets/benz.svg';
import {Card, CardItem, Button} from 'native-base';

const UpComingRides = () => {
  return (
    <Card style={styles.cardContainer}>
      <CardItem style={styles.cardet}>
        <Image source={require('../../Assets/toyo.png')} resizeMode="contain" />
        <Text style={styles.carName}>Toyota Corolla 2010</Text>
      </CardItem>
      <CardItem style={styles.cardets}>
        <View>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.txt}>June 27 2020</Text>
        </View>
        <View>
          <Text style={styles.label}>Duration</Text>
          <Text style={styles.txt}>2 months & 2 days </Text>
        </View>
        <View>
          <Text style={styles.label}>Drive</Text>
          <Text style={styles.txt}>Pending</Text>
        </View>
        <Button style={styles.button}>
          <Text style={styles.buttonText}>See More </Text>
        </Button>
      </CardItem>
    </Card>
  );
};

export default UpComingRides;

const styles = StyleSheet.create({
  cardContainer: {
    // padding: 17,
    flexDirection: 'row',
  },
  upcomimgGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
  },
  upcomingText: {
    fontWeight: 'bold',
  },
  cardet: {
    flexDirection: 'column',
  },
  carName: {
    color: '#673ab7',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardets: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: '#673AB7',
    borderRadius: 5,
    height: 25,
    marginTop: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  label: {
    fontSize: 11,
    color: '#673ab7',
    fontWeight: 'bold',
  },
  txt: {
    fontSize: 13,
  },
});
