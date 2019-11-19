import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const AllButton = ({title, handlePress}) => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.button} onPress={handlePress}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AllButton;

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    width: 250,
    backgroundColor: 'teal',
    paddingVertical: 20,
    marginVertical: 20,
    textTransform: 'capitalize',
    color: '#fff',
    fontWeight: '900',
    borderRadius: 5,
  },
});
