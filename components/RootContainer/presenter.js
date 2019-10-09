import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import LoggedOutNavigation from '../../navigation/LoggedOutNavigation';
import LoggedInBottomTabNavigation from '../../navigation/LoggedInBottomTabNavigation';

class RootContainer extends React.Component {
  state = {
    isReady: true,
  };

  render() {
    const { isLoggedIn } = this.props;

    if (this.state.isReady === false) {
      return null;
    }

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn ? (
          // Home 화면으로 이동
          <LoggedInBottomTabNavigation />
        ) : (
          // Login 화면으로 이동
          <LoggedOutNavigation />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default RootContainer;
