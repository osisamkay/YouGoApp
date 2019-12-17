import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation,
  StatusBar,
} from 'react-native';
import {useSelector} from 'react-redux';
import AllButton from '../components/AllButtons';
import Avatar from '../../Assets/avatar.svg';
import Accordion from '../components/Accordion';
import ReportModals from '../components/Modals/ReportModal';
import LogoutModals from '../components/Modals/LogoutModal';
import {NavigationActions} from 'react-navigation';

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const Account = ({navigation}) => {
  const [wallet, setWallet] = useState(false);
  const [Support, setSupport] = useState(false);
  const [modal, setModal] = useState(false);
  const [logoutModals, setLogoutModal] = useState(false);
  const {userData, isLogged} = useSelector(state => state);

  const handleLogout = () => {
    navigation.navigate('Login');
    setLogoutModal(false);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#522E92" />

      <View style={styles.backdropContainer}>
        <ImageBackground
          source={require('../../Assets/ellipse.png')}
          style={styles.background}>
          <View style={styles.avatarContainer}>
            <Text style={styles.title}>My Profile</Text>
          </View>
        </ImageBackground>
        <View style={styles.profileContainer}>
          <Text style={styles.edit}>...</Text>
          <View style={styles.avatar}>
            <Avatar />
            <Text style={styles.name}>{userData.name}</Text>
            <Text style={styles.dets}>{userData.phone}</Text>
            <Text style={styles.dets}>{userData.email}</Text>
          </View>
          <View style={{height: 450, paddingTop: '34%'}}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{height: 450}}>
              <Accordion
                title="Wallet"
                handlePress={() => {
                  LayoutAnimation.easeInEaseOut();
                  setWallet(!wallet);
                  setSupport(false);
                }}
                icon="chevron"
                transform={wallet ? 'no' : 'yes'}
                show="yes"
              />
              {/* //wallet container */}
              <View
                style={
                  wallet ? styles.detailsContainer : styles.detailsContainerHide
                }>
                <View style={styles.walletInfo}>
                  <Text style={{fontSize: 15}}>Balance :</Text>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    N350,000.00
                  </Text>
                </View>
                <View style={{...styles.walletInfo, marginTop: 15}}>
                  <Text style={{fontSize: 15}}>Voucher :</Text>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>N0.00</Text>
                </View>
                <View style={{...styles.walletInfo, marginTop: 15}}>
                  <Text style={{fontSize: 15}}>Total :</Text>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    N350,000.00
                  </Text>
                </View>
              </View>
              <Accordion title="Cancel Transaction" />
              <Accordion
                title="Support"
                handlePress={() => {
                  LayoutAnimation.easeInEaseOut();

                  setSupport(!Support);
                  setWallet(false);
                }}
                icon="chevron"
                transform={Support ? 'no' : 'yes'}
                show="yes"
              />
              <View
                style={
                  Support
                    ? styles.supportContainer
                    : styles.detailsContainerHide
                }>
                <TouchableOpacity
                  style={styles.supportInfo}
                  onPress={() => {
                    setModal(true);
                  }}>
                  <Text style={styles.supportInfoText}>Report an Issue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.supportInfo}>
                  <Text style={styles.supportInfoText}>Report Last Ride</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.supportInfo}
                  onPress={() => {
                    navigation.navigate('History');
                  }}>
                  <Text style={styles.supportInfoText}>Report Other Ride</Text>
                </TouchableOpacity>
              </View>
              <Accordion title="FAQ" />
              <Accordion
                title="Log out"
                show="yes"
                handlePress={() => {
                  setLogoutModal(!logoutModals);
                }}
              />
            </ScrollView>
          </View>
        </View>
      </View>
      <ReportModals
        modalVisible={modal}
        handleOutside={() => {
          setModal(false);
        }}
      />
      <LogoutModals
        handleLogout={handleLogout}
        modalVisible={logoutModals}
        handleOutside={() => {
          setLogoutModal(false);
        }}
      />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    // justifyContent: 'flex-end',
  },
  avatarContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 17,
    marginTop: 15,
  },
  backdropContainer: {
    width: '100%',
    height: '41.7%',
  },
  Backdrop: {
    width: '100%',
    resizeMode: 'stretch',
  },
  avatar: {
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 1,
    position: 'absolute',
    top: '-15%',
  },
  profileContainer: {
    alignSelf: 'center',
    width: '83%',
    position: 'relative',
    bottom: '48%',
    backgroundColor: '#fff',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  detailsContainer: {
    paddingVertical: 5,
    backgroundColor: '#F8F8F8',
  },
  detailsContainerHide: {
    display: 'none',
  },
  walletInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 13,
  },
  supportInfoText: {
    color: '#7E58C2',
    fontSize: 15,
  },
  supportContainer: {
    backgroundColor: '#F8F8F8',
  },
  supportInfo: {
    paddingVertical: 7,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: '#D1D1D1',
  },
  dets: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#737373',
  },
  edit: {
    alignSelf: 'flex-end',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 13,
  },
});
