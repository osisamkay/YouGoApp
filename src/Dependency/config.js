import AsyncStorage from '@react-native-community/async-storage';

export const tokenValue = () => {
  const value = new Promise((resolve, reject) => {
    resolve(AsyncStorage.getItem('@Token'));
  });
  const Token = value.then(data => {
    return data;
  });
  return Token;
};
