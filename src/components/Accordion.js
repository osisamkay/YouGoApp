import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons/';

const Accordion = ({title, handlePress, transform, show}) => {
  return (
    <TouchableOpacity style={styles.border} onPress={handlePress}>
      <View style={styles.accordionContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={show === 'yes' ? styles.Icon : styles.IconHide}>
          <Icon
            name={transform === 'yes' ? 'chevron-right' : 'chevron-down'}
            size={23}
            color="#000"
          />
        </View>
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
    borderBottomWidth: 0.5,
    paddingTop: 25,
    paddingBottom: 14,
    borderColor: '#C4C4C4',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  IconHide: {
    display: 'none',
  },
  Icon: {
    display: 'flex',
  },
});
