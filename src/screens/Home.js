import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AllButton from '../components/AllButtons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>"This is the settings screen"</Text>
      <AllButton
        title="go to Login screen"
        handlePress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});
