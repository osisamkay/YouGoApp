import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, StatusBar} from 'react-native';
import TopDeals from '../components/TopDeals';
import Instance from '../Api/Instance';

const AllTopRides = () => {
  const [Deals, setDeals] = useState([]);
  const [ShowDeals, setShowDeals] = useState(true);
  useEffect(() => {
    // get top deals from Api
    const TopDeals = new Promise(resolve => {
      resolve(Instance.post('user/allTopdeals '));
    });
    TopDeals.then(({data: {data}}) => {
      data.length > 0 ? setShowDeals(false) : false;
      setDeals(data);
    });
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#522E92" />
      <View style={styles.view}>
        <View style={styles.card}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Deals}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
              return (
                <TopDeals
                  title={item.title}
                  price={item.description}
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
});
