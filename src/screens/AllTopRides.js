import React from 'react';
import {View, Text, StyleSheet, FlatList, StatusBar} from 'react-native';
import TopDeals from '../components/TopDeals';
import {Deals} from '../DealsData';

const AllTopRides = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#522E92" />
      <View style={styles.view}>
        <View style={styles.card}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Deals}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <TopDeals
                  title={item.deal}
                  price={item.price}
                  style={styles.content}
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AllTopRides;

const styles = StyleSheet.create({
  view: {
    height: '100%',
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
    paddingHorizontal: 17,
    marginTop: 17,
    alignSelf: 'center',
  },
  content: {
    alignSelf: 'center',
  },
});
