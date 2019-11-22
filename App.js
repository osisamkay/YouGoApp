import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Settings from './src/screens/Settings';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import CarsScreen from './src/screens/CarsScreen';

const MainNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    CarScreen: {
      screen: CarsScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: '#673AB7',
      },
    },
  },
  {
    initialRouteName: 'Login',
    headerLayoutPreset: 'center',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
