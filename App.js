import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'Settings',
      },
    },
  },
  {
    initialRouteName: 'Home',
    // headerLayoutPreset: "center"
  },
);

const App = createAppContainer(MainNavigator);

export default App;
