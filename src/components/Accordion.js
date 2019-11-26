import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons/';

const Accordion = ({title}) => {
  return (
    <TouchableOpacity style={styles.border}>
      <View style={styles.accordionContainer}>
        <Text style={styles.title}>{title}</Text>
        <Icon name="chevron-right" size={23} color="#000" />
      </View>
    </TouchableOpacity>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  accordionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 13,
  },
  border: {
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    paddingTop: 33,
    paddingBottom: 14,
    borderColor: '#C4C4C4',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
