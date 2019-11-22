import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons/';
import Cars from '../components/Cars';
import {CarData} from '../CarData';
import LinearGradient from 'react-native-linear-gradient';
import AllButton from '../components/AllButtons';
const {height} = Dimensions.get('window');

const CarsScreen = () => {
  const [type, setType] = useState(false);
  const [bot, setBot] = useState(true);
  const [brand, setBrand] = useState(true);

  // to slide bottom viw uo
  const onpressd = () => {
    setBot(!bot);
  };
  // to show types
  const handleType = () => {
    setType(!type);
    setBrand(true);
  };
  // to show Brands
  const handleBrand = () => {
    setBrand(!brand);
    setType(false);
  };

  return (
    <View style={styles.container}>
      <View style={bot ? {height: '50%'} : {height: '20%'}}>
        <Text style={styles.title}>Sedans</Text>
        <View style={styles.imagecontainer}>
          <Image source={require('../../Assets/blackcar.png')} />
        </View>
        <View style={styles.topview}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.price}>Min: #22500/5hr</Text>
        </View>
        <View style={styles.topbottomview}>
          <View>
            <Text style={styles.description}>Four Doors</Text>
            <Text style={styles.description}>Slide</Text>
          </View>
          {/* <Text style={styles.price}>Min: #22500/5hr</Text> */}
        </View>
        <View>
          <Text style={styles.topbottomviewText}>
            sjdhas hdja shd asjd ashd asjd has djhas dhjas djas dhasd
            sadhjasd,asbdasbdjasd asnjd ahs dhjas djhas dhja sjdhas hdja shd
            asjd ashd asjd has djhas dhjas djas dhasd sadhjasd
          </Text>
        </View>
      </View>

      <LinearGradient
        start={{x: 0, y: 0.3822}}
        end={{x: 0, y: 0.8698}}
        colors={['#673AB7', '#370B87']}
        style={
          bot
            ? {...styles.bottom, height: height / 2.5}
            : {...styles.bottom, height: height * 0.725}
        }>
        <TouchableOpacity
          onPress={onpressd}
          style={{width: 20, alignSelf: 'center'}}>
          <Icon
            name="chevron-double-up"
            color="#fff"
            size={25}
            style={
              bot
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
                      type
                        ? {transform: [{rotate: '90deg'}]}
                        : {transform: [{rotate: '0deg'}]}
                    }
                  />
                  <Text style={styles.pickViewOneText}>Choose Type</Text>
                </TouchableOpacity>
              </View>
              <View
                style={
                  !type ? styles.carTypeContainer : styles.carTypeContainershow
                }>
                <ScrollView
                  contentContainerStyle={styles.scroll}
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={bot ? false : true}
                  style={
                    bot
                      ? {...styles.carlistone, height: 133, overflow: 'hidden'}
                      : {...styles.carlistone, height: 267, overflow: 'scroll'}
                  }>
                  {CarData.map(data => {
                    return (
                      <TouchableOpacity key={data.id}>
                        <Cars name={data.carType} />
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
                </TouchableOpacity>
              </View>
              <View
                style={
                  brand ? styles.carTypeContainer : styles.carTypeContainershow
                }>
                <ScrollView
                  contentContainerStyle={styles.scroll}
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={bot ? false : true}
                  style={
                    bot
                      ? {...styles.carlistone, height: 133, overflow: 'hidden'}
                      : {
                          ...styles.carlistone,
                          height: 410,
                          overflow: 'scroll',
                        }
                  }>
                  {CarData.map(data => {
                    return (
                      <View key={data.id}>
                        <Cars name={data.carType} />
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </View>
          <View>
            <AllButton title="Next" />
          </View>
        </View>
      </LinearGradient>
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
    fontSize: 28,
    color: '#673AB7',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  imagecontainer: {
    alignItems: 'center',
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    // justifyContent: 'space-around',
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
});
