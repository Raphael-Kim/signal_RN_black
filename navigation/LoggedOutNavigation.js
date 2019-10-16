import React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LogInScreen from '../screens/Logout/LogInScreen';

// API: createStackNavigator(RouteConfigs, StackNavigatorConfig);
const AppNavigator = createStackNavigator(
  {
    LogIn: {
      screen: LogInScreen,
    },
  },
  {
    initialRouteName: 'LogIn',
    /*
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTitle: (
        <View style={{height: '100%', width: 32, justifyContent: 'center'}}>
          <Image
            style={{height: 32, width: 32}}
            resizeMode='stretch'
            source={require('../assets/images/logoSmall(x1).png')}
          />
        </View>
      ),
    },
    */
    headerMode: 'none',
  },
);

const LoggedOutNavigation = createAppContainer(AppNavigator);

export default LoggedOutNavigation;
