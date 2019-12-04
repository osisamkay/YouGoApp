import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import UpcomingComponent from '../components/UpComingRides';
import {Deals} from '../DealsData';
import TopDeals from '../components/TopDeals';

const InitialHomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          style={styles.background}
          source={require('../../Assets/banner.png')}>
          <View style={styles.topContainer}>
            <View style={styles.topTexts}>
              <Text style={styles.topText1}>Hello,</Text>
              <Text style={styles.topText2}>Chiamaka Nkem-Eze</Text>
            </View>
            <View style={styles.buttonGroup}>
              <View style={{alignSelf: 'flex-end'}}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonTxt}>My Wallet</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonTxt}>My Wallet</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <UpcomingComponent />
            <View>
              <View style={styles.upcomimgGroup}>
                <Text style={styles.upcomingText}>Top Deals</Text>
                <TouchableOpacity>
                  <Text style={styles.upcomingText}>View All</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Deals}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return <TopDeals title={item.deal} price={item.price} />;
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default InitialHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    height: '59.5%',
    width: '100%',
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  background: {
    height: '100%',
    width: '100%',
  },
  topContainer: {
    height: '100%',
    paddingHorizontal: 17,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topTexts: {marginTop: 26},
  topText1: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
  topText2: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    width: 126,
    borderRadius: 20,
  },
  buttonTxt: {
    textAlign: 'center',
    paddingVertical: 11,
    color: '#673AB7',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  buttonGroup: {
    alignContent: 'flex-end',
    marginBottom: 80,
  },
  bottomContainer: {
    height: '40.5%',
    paddingHorizontal: 17,
  },
  upcomimgGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
  },
  upcomingText: {
    fontWeight: 'bold',
  },
});
