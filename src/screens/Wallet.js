import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card, CardItem} from 'native-base';

const Wallet = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <CardItem style={styles.items}>
          <Text style={styles.label}>Balance</Text>
          <Text style={styles.text}>N350,000.00</Text>
        </CardItem>
      </Card>
      <View>
        <Image
          source={require('../../Assets/vouvher1.png')}
          style={{width: '100%'}}
        />
        <Image
          source={require('../../Assets/vouvher1.png')}
          style={{width: '100%'}}
        />
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 17,
  },
  card: {backgroundColor: '#673ab7', borderRadius: 15},
  items: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#673ab7',
    borderRadius: 15,
    height: 112,
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
