import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Linking,
  Platform,
  StatusBar,
  ScrollView,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {useSelector} from 'react-redux';
import CurrentRideCard from '../components/CurrentRideCard';
import UpComingRides from '../components/UpComingRides';
import TopDeals from '../components/TopDeals';
import TopUpModal from '../components/Modals/TopUpModal';
import Instance from '../Api/Instance';
import NoRides from '../components/NoRides';
import NoCurrentRides from '../components/NoCurrntRide';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
  const [topUp, setTopUp] = useState(false);
  const [Deals, setDeals] = useState([]);
  const [Bookings, setBookings] = useState([]);
  const [ShowDeals, setShowDeals] = useState(true);
  const {userData, isLogged} = useSelector(state => state);

  let token = userData.token;
  const API = axios.create({
    baseURL: 'http://35.178.37.45:5000/',
    headers: {'x-auth-token': `${token}`},
  });
  console.log(token);
  // on boarding
  useEffect(() => {
    if (isLogged !== true) {
      navigation.navigate('Login');
    }

    // get all bookings from Api
    const Bookings = new Promise(resolve => {
      resolve(API.post('user/booking/all'));
    });
    Bookings.then(({data: {data}}) => {
      console.log(data);
      setBookings(data);
    });
    // get top deals from Api
    const TopDeals = new Promise(resolve => {
      resolve(Instance.post('user/allTopdeals '));
    });
    TopDeals.then(({data: {data}}) => {
      data.length > 0 ? setShowDeals(false) : false;
      setDeals(data);
    });
  }, []);

  // make calls
  const makeCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${1234567890}`;
    } else {
      phoneNumber = `telprompt:${1234567890}`;
    }

    Linking.openURL(phoneNumber);
  };

  // handle top up
  const handleTopUp = () => {
    setTopUp(true);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#522E92" />
      <View style={styles.backdrop}>
        <View style={styles.shadow}>
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={require('../../Assets/homeback.png')}>
            <View style={styles.topContainer}>
              <View style={styles.topTexts}>
                <Text style={styles.topText1}>Hello,</Text>
                <Text style={styles.topText2}>{userData.name}</Text>
              </View>
              <View style={styles.buttonGroup}>
                <View style={{alignSelf: 'flex-end', marginRight: 17}}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate('Wallet');
                    }}>
                    <Text style={styles.buttonTxt}>My Wallet</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.view}>
            <Text style={styles.viewText}>Current Ride</Text>
            <TouchableOpacity>
              <Text style={styles.viewText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 17}}>
            <NoCurrentRides />
          </View>
          {/* <CurrentRideCard makeCall={makeCall} TopUp={handleTopUp} /> */}
        </View>
        <View>
          <View style={styles.view}>
            <Text style={styles.viewText}>Up Coming Ride</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UpComing');
              }}>
              <Text style={styles.viewText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginHorizontal: 17}}>
            <NoRides />
            {/* {Bookings.length < 0 ? (
              <NoRides />
            ) : (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Bookings}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                  return <UpComingRides />;
                }}
              />
            )} */}
          </View>
        </View>
        <View>
          <View style={styles.view}>
            <Text style={styles.viewText}>Top Deals</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TopDeals');
              }}>
              <Text style={styles.viewText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.current}>
            {ShowDeals && <Text>No Deals Available...</Text>}

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={Deals}
              keyExtractor={item => item._id}
              renderItem={({item}) => {
                return <TopDeals title={item.title} price={item.description} />;
              }}
            />
          </View>
        </View>
      </ScrollView>
      <TopUpModal
        modalVisible={topUp}
        handleOutside={() => {
          setTopUp(false);
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    width: '100%',
    height: '30.5%',
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
    marginBottom: 51,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
    marginHorizontal: 17,
  },
  viewText: {
    fontWeight: '800',
  },
  current: {
    marginLeft: 17,
  },
});
