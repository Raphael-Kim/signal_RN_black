import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';

class HomeTabScreen extends React.Component {
  state = {
    isReady: true,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('QScreen');
          }}
        >
          <View style={styles.cardContainer}>
            <Text style={styles.hashTagText}>#페이스북 #node.js #facebook</Text>
            <Text style={styles.titleText}>
              페이스북은 node_modules를 어떻게 관리하나요?
            </Text>
          </View>
          <View style={styles.cardRowContainer}>
            <Text>박정훈, 임주연 님 외 5명이 댓글을 달았습니다.</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(HomeTabScreen);
