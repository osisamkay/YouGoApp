import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import AllButton from '../components/AllButtons';
import TextComponent from '../components/TextComponent';
import TokenModal from '../components/Modals/TokenModal';
import {withNavigation} from 'react-navigation';

const Login = ({navigation}) => {
  Login.navigationOptions = {
    title: '78fh7h',
  };
  const [modal, setModal] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={{marginTop: 94}}>
          <View style={styles.image}>
            <Image source={require('../../Assets/logo.png')} />
          </View>
          <View>
            <Text style={styles.text}>SIGN IN</Text>
          </View>
          <View style={styles.form}>
            <View style={{marginBottom: 46}}>
              <TextComponent label="Phone Number/Email" />
            </View>
            <View style={{marginBottom: 19}}>
              <TextComponent label="Password" />
            </View>
            <TouchableOpacity onPress={() => setModal(!modal)}>
              <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}>
          <AllButton
            style={{textAlign: 'center'}}
            title="sign in"
            handlePress={() => navigation.navigate('CarScreen')}
          />
          <View style={styles.linkGroup}>
            <Text>Don't Have an account?</Text>
            <TouchableOpacity>
              <Text
                style={styles.link2}
                onPress={() => navigation.navigate('SignUp')}>
                Sign Up
              </Text>
            </TouchableOpacity>
            <TokenModal
              modalVisible={modal}
              handleOutside={() => {
                setModal(false);
              }}
              swipe={() => {
                setModal(false);
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(Login);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginHorizontal: 1,
  },
  container2: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    // marginHorizontal: 57,
  },
  image: {display: 'flex', alignItems: 'center'},
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#2C2C2C',
    textAlign: 'center',
    marginHorizontal: 15,
  },
  form: {
    // width: wp('100%'),
    // maxWidth: 400,
    alignSelf: 'center',
  },
  bottom: {
    marginBottom: 22,
    alignItems: 'center',
  },
  linkGroup: {
    paddingTop: 10,
    textAlign: 'center',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    color: '#673AB7',
    fontSize: 14,
    fontWeight: '500',
  },
  link2: {
    color: '#673AB7',
    fontSize: 18,
    marginHorizontal: 4,
    fontWeight: 'bold',
  },
});
