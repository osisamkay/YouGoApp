import React, {useState, useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Animated,
  NativeModules,
  LayoutAnimation,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons/';
import Cars from '../components/Cars';
import {CarData, CarBrand} from '../CarData';
import LinearGradient from 'react-native-linear-gradient';
import AllButton from '../components/AllButtons';
import YearsModal from '../components/Modals/Years';
import {FlatList} from 'react-native-gesture-handler';
const {height} = Dimensions.get('screen');
import axios from 'axios';
import {firstTripDetails} from '../actions/Actions';

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const CarsScreen = ({navigation}) => {
  const [type, setType] = useState(false);
  const [bot, setBot] = useState(true);
  const [brand, setBrand] = useState(true);
  const [carType, setCarType] = useState(' ');
  const [carBrand, setCarBrand] = useState(' ');
  const [year, setYear] = useState([]);
  const [yearModal, setYearModal] = useState(false);
  const [info, setInfo] = useState(false);
  const [getType, setGetType] = useState([]);
  const [getBrand, setGetBrand] = useState([]);
  const [active, setActive] = useState(false);

  const {userData} = useSelector(state => state);
  const dispatch = useDispatch();

  let token = userData.token;
  const API = axios.create({
    baseURL: 'http://35.178.37.45:5000/',
    headers: {'x-auth-token': `${token}`},
  });

  useEffect(() => {
    const Cars = new Promise(resolve => {
      resolve(API.post('user/cars'));
    });
    Cars.then(({data: {data}}) => {
      setGetType(data);
    });
  }, []);

  // get Car Brand

  // to slide bottom viw uo
  const onpressd = () => {
    LayoutAnimation.spring();
    setBot(!bot);
    !bot ? setType(false) : setType(true);
    bot ? setBrand(true) : false;
  };
  // to show types
  const handleType = () => {
    LayoutAnimation.easeInEaseOut();
    setBot(true);
    setType(!type);
    setBrand(true);
  };
  // to show Brands
  const handleBrand = () => {
    LayoutAnimation.easeInEaseOut();
    if (!bot) {
      setBot(true);
      setType(!type);
    } else {
      setBrand(!brand);
      setType(true);
    }
  };

  // get car type on click
  const handlePress = type => {
    setGetBrand([]);
    setCarType(type);
    setType(true);
    setBrand(false);
    // handle Car Brand
    const Brand = new Promise(resolve => {
      resolve(API.post('user/cars/type', {cartype: `${type}`}));
    });
    Brand.then(({data}) => {
      if (data.statuscode === 200) {
        let brand = data.data;
        setGetBrand(brand);
      }
    });
  };
  // get car type on click
  const handleBrandSelect = type => {
    setCarBrand(type);
    setType(true);
    setYearModal(true);
  };

  const handleDone = () => {
    setBot(false);
    setYearModal(false);
    setBrand(true);
    setInfo(true);
  };

  const TripDetail = {
    carType,
    carBrand,
    year,
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#522E92" />
      <View style={!bot ? {height: '50%'} : {height: '20%'}}>
        <Text style={styles.title}>Sedans</Text>
        <View style={styles.imagecontainer}>
          <Image
            source={require('../../Assets/blackcar.png')}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
        <View style={!info ? styles.hide : styles.show}>
          <View style={styles.topview}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.price}>Min: #22500/5hr</Text>
          </View>
          <View style={styles.topbottomview}>
            <View>
              <Text style={styles.description}>Four Doors</Text>
              <Text style={styles.description}>Slide</Text>
            </View>
            <Text style={styles.price}>Year: {year}</Text>
          </View>
          <View>
            <Text style={styles.topbottomviewText}>
              sjdhas hdja shd asjd ashd asjd has djhas dhjas djas dhasd
              sadhjasd,asbdasbdjasd asnjd ahs dhjas djhas dhja sjdhas hdja shd
              asjd ashd asjd has djhas dhjas djas dhasd sadhjasd
            </Text>
          </View>
        </View>
      </View>

      <LinearGradient
        start={{x: 0, y: 0.3822}}
        end={{x: 0, y: 0.8698}}
        colors={['#673AB7', '#370B87']}
        style={
          !bot
            ? {...styles.bottom, height: '35%'}
            : {...styles.bottom, height: '100%'}
        }>
        <TouchableOpacity
          onPress={onpressd}
          style={{width: 20, alignSelf: 'center'}}>
          <Icon
            name="chevron-double-up"
            color="#fff"
            size={25}
            style={
              !bot
                ? {textAlign: 'center'}
                : {textAlign: 'center', transform: [{rotate: '180deg'}]}
            }
          />
        </TouchableOpacity>
        <View style={styles.selectCar}>
          <View style={styles.selectCarGroup}>
            <View>
              <View>
                <TouchableOpacity
                  style={styles.pickViewOne}
                  onPress={handleType}>
                  <Icon
                    name="chevron-right"
                    size={20}
                    color="#fff"
                    style={
                      !type
                        ? {transform: [{rotate: '90deg'}]}
                        : {transform: [{rotate: '0deg'}]}
                    }
                  />
                  <Text style={styles.pickViewOneText}>Choose Type</Text>
                  <Text style={styles.selected}>{carType}</Text>
                </TouchableOpacity>
              </View>
              <View
                style={
                  type ? styles.carTypeContainer : styles.carTypeContainershow
                }>
                {getType.length < 1 ? (
                  <ActivityIndicator style={{marginTop: 150}} />
                ) : (
                  false
                )}
                <ScrollView
                  contentContainerStyle={styles.scroll}
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={!bot ? false : true}
                  style={
                    !bot
                      ? {...styles.carlistone, height: 133, overflow: 'hidden'}
                      : {...styles.carlistone, height: 267, overflow: 'scroll'}
                  }>
                  {getType.map(data => {
                    return (
                      <TouchableOpacity key={data._id}>
                        <Cars
                          name={data.type}
                          handlePress={() => {
                            handlePress(data.type);
                          }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
            {/* ....................car Brand................................ */}
            <View style={{marginTop: 10}}>
              <View>
                <TouchableOpacity
                  style={styles.pickViewOne}
                  onPress={handleBrand}>
                  <Icon
                    name="chevron-right"
                    size={20}
                    color="#fff"
                    style={
                      !brand
                        ? {transform: [{rotate: '90deg'}]}
                        : {transform: [{rotate: '0deg'}]}
                    }
                  />
                  <Text style={styles.pickViewOneText}>Choose Brand</Text>
                  <Text style={styles.selected}>{carBrand}</Text>
                </TouchableOpacity>
              </View>
              <View
                style={
                  brand ? styles.carTypeContainer : styles.carTypeContainershow
                }>
                {getBrand.length < 1 ? (
                  <ActivityIndicator style={{marginTop: 150}} />
                ) : (
                  false
                )}
                <ScrollView
                  contentContainerStyle={styles.scroll}
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={!bot ? false : true}
                  style={
                    bot
                      ? {
                          ...styles.carlistone,
                          height: 320,
                          overflow: 'hidden',
                        }
                      : {
                          ...styles.carlistone,
                          height: 133,
                          overflow: 'scroll',
                        }
                  }>
                  {getBrand.map(data => {
                    return (
                      <View key={data._id}>
                        <Cars
                          name={data.brand}
                          handlePress={() => {
                            handleBrandSelect(data.brand);
                          }}
                        />
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </View>
          <View>
            <AllButton
              title="Next"
              status={info}
              handlePress={() => {
                dispatch(firstTripDetails(TripDetail));
                navigation.navigate('Calender');
              }}
            />
          </View>
        </View>
      </LinearGradient>
      <YearsModal
        value={year}
        modalVisible={yearModal}
        selected={value => {
          setYear(value);
        }}
        handleDone={handleDone}
      />
    </View>
  );
};

export default CarsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '600',
    fontSize: 17,
    color: '#673AB7',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  imagecontainer: {
    alignItems: 'center',
    height: 100,
  },
  description: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Roboto',
  },
  price: {
    color: '#673AB7',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 'bold',
  },
  topview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(0, 0, 0, 0.8)',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginHorizontal: 17,
  },
  topbottomview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    marginHorizontal: 17,
  },
  topbottomviewText: {
    textAlign: 'justify',
    lineHeight: 20,
    fontWeight: '600',
    marginHorizontal: 17,
    marginTop: 25,
  },
  bottom: {
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    paddingHorizontal: 17,
    paddingVertical: 11,
  },
  pickViewOne: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
  pickViewOneText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  carlistone: {
    paddingVertical: 13,
  },
  scroll: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  carTypeContainer: {
    display: 'none',
  },
  carTypeContainershow: {
    display: 'flex',
  },
  selectCar: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  selected: {
    marginLeft: 'auto',
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  hide: {
    display: 'none',
  },
  show: {
    display: 'flex',
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
});
