import React from 'react';
import {Item, Input, Label, Icon} from 'native-base';
import {View, StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/FontAwesome';

const {height} = Dimensions.get('screen'); // to get screen dimension (width and height)

const TextComponent = ({label, getText, eye, handlePassword, show}) => {
  return (
    <View>
      <Item floatingLabel style={styles.container}>
        <Label style={styles.label}>{label}</Label>
        <Input
          onChangeText={getText}
          autoCompleteType="off"
          secureTextEntry={label === 'Password' ? show : false}
        />
        <Icon
          type="Entypo"
          name={label === 'Password' ? `${eye}` : ''}
          onPress={handlePassword}
        />
      </Item>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  label: {
    color: 'rgba(109, 109, 109, 0.8)',
    paddingVertical: 10,
    fontSize: 15,
  },
  container: {
    width: widthPercentageToDP('91%'),
    borderBottomWidth: 2,
  },
});
