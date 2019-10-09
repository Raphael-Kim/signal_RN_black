import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class HomeTabScreen extends React.Component {
  state = {
    isFetching: false,
  };

  render() {
    console.log('HomeTabScreen/presenter의 render()함수 안입니다.');

    return (
      <View style={styles.container}>
        <Text style={styles.text}>HomeTab</Text>
        <Text
          style={styles.logout}
          onPress={() => {
            this.props.setLogOut();
          }}
        >
          로그아웃
        </Text>
      </View>
    );
  }
}

export default HomeTabScreen;
