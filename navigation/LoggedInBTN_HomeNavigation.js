import { createStackNavigator } from 'react-navigation-stack';
import HomeTabScreen from '../screens/Login/HomeTabScreen';

// API: createStackNavigator(RouteConfigs, StackNavigatorConfig);
const AppNavigator = createStackNavigator(
  {
    HomeTab: {
      screen: HomeTabScreen,
    },
  },
  {
    initialRouteName: 'HomeTab',
    headerLayoutPreset: 'left',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
      headerLeftContainerStyle: {},
      headerTitleContainerStyle: {},
      headerRightContainerStyle: {},
    },
    headerMode: 'none',
  },
);

export default AppNavigator;
