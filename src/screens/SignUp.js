import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AllButton from '../components/AllButtons';
import TextComponent from '../components/TextComponent';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const {height} = Dimensions.get('screen'); // to get screen dimension (width and height)

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 94}}>
        <View style={styles.image}>
          <Image source={require('../../Assets/logo.png')} />
        </View>
        <View>
          <Text style={styles.text}>SIGN UP</Text>
        </View>
        <View style={styles.form}>
          <View>
            <TextComponent label="Full Name" />
          </View>
          <View>
            <TextComponent label="Email" />
          </View>
          <View>
            <TextComponent label="Phone Number" />
          </View>
          <View>
            <TextComponent label="Password" />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <AllButton
          style={{textAlign: 'center'}}
          title="sign up"
          handlePress={() => {
            navigation.navigate('Home');
          }}
        />
        <View style={styles.linkGroup}>
          <Text>Already Have an account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.link2}
              onPress={() => navigation.navigate('Login')}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 17,
    justifyContent: 'space-between',
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
    alignSelf: 'center',
    height: '65%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
