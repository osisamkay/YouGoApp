import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import AllButton from '../components/AllButtons';
import Avatar from '../../Assets/avatar.svg';
import Accordion from '../components/Accordion';

const Account = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backdropContainer}>
        <ImageBackground
          source={require('../../Assets/ellipse.png')}
          style={styles.background}>
          <View style={styles.avatarContainer}>
            <Text style={styles.title}>My Profile</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.avatar}>
          <Avatar />
          <Text style={styles.name}>Chiamaka Nkem-Eze</Text>
        </View>
        <View>
          <Accordion title="Wallet" />
          <Accordion title="Wallet" />
          <Accordion title="Wallet" />
          <Accordion title="Wallet" />
        </View>
      </View>
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
    zIndex: -1,
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
    fontSize: 25,
    marginTop: 50,
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
    zIndex: 10,
    position: 'relative',
    bottom: '13%',
  },
  profileContainer: {
    alignSelf: 'center',
    // borderWidth: 2,
    width: '83%',
    position: 'relative',
    bottom: '17%',
    // height: 300,
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
    marginVertical: 10,
  },
});
