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
import {Deals} from '../DealsData';
import TopUpModal from '../components/Modals/TopUpModal';

const HomeScreen = ({navigation}) => {
  const [topUp, setTopUp] = useState(false);
  const {userData, isLogged} = useSelector(state => state);

  // on boarding
  useEffect(() => {
    // return async () => {
    //   try {
    //     const granted = await PermissionsAndroid.request(
    //       PermissionsAndroid.PERMISSIONS.INTERNET,
    //       {
    //         title: 'YouGo Internet Permission',
    //         message: 'YouGo App needs access to the Internet ',
    //       },
    //     );
    //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //       Alert.alert('internet Permission Granted.');
    //       if (isLogged !== true) {
    //         navigation.navigate('Login');
    //       }
    //       // store token
    //       AsyncStorage.setItem('@Token', `${userData.token}`);
    //     } else {
    //       Alert.alert('internet Permission Not Granted');
    //     }
    //   } catch (err) {
    //     console.warn(err);
    //   }
    // };
    if (isLogged !== true) {
      navigation.navigate('Login');
    }
    // store token
    AsyncStorage.setItem('@Token', `${userData.token}`);
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
          <CurrentRideCard makeCall={makeCall} TopUp={handleTopUp} />
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
            <UpComingRides />
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
