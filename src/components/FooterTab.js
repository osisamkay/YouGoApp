import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Notifications from '../screens/Notificarions';
import History from '../screens/History';

const TabNavigator = createBottomTabNavigator(
  {
    Home: SignUp,
    // Notifications: Notifications,
    Settings: Login,
    History: History,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          //   IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        } else if (routeName === 'Notifications') {
          iconName = 'ios-mail';
        } else if (routeName === 'History') {
          iconName = 'ios-timer';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#673AB7',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(TabNavigator);
