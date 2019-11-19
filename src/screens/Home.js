import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AllButton from '../components/AllButtons';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>"This is the home screen"</Text>
      <AllButton
        title="go to settings screen"
        handlePress={() => {
          navigation.navigate('Settings');
        }}
      />
    </View>
  );
};

export default Home;

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
