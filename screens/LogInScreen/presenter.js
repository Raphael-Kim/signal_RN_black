import React from 'react';
import { Text, View, StatusBar, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import RNKakaoLogins from 'react-native-kakao-logins';

class LogInScreen extends React.Component {
  state = {};

  kakaoLogin() {
    console.log('kakaoLogin');
    RNKakaoLogins.login((err, result) => {
      if (err) {
        Alert.alert('error', err.toString());
        return;
      }
      // Alert.alert('result', JSON.stringify(result));
      console.log(this.props);
      this.props.setToken(result);
      this.getProfile();
    });
  }

  getProfile() {
    console.log('getKakaoProfile');
    RNKakaoLogins.getProfile((err, result) => {
      if (err) {
        Alert.alert('error', err.toString());
        return;
      }
      this.props.setUser(result);
      Alert.alert(`${result.nickname}님 어서오세요!`, result.id);
      this.props.setLogIn();
    });
  }

  render() {
    console.log(
      'LogInScreen/presenter.js의 render() 속 this.props: ',
      this.props,
    );

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <Text style={styles.title}>
          대한민국 IT의 출발선,{'\n'}
          시그널입니다!
        </Text>
        <TouchableOpacity
          onPress={() => this.kakaoLogin()}
          activeOpacity={0.5}
          style={styles.btnKakaoLogin}
        >
          <Text style={styles.txtKakaoLogin}>카카오로 로그인하기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LogInScreen;
