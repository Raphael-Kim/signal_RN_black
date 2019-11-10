import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';

class Card extends React.Component {
  state = {
    isReady: true,
  };

  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardRowContainer}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/profileImageSample.png')}
          />
          <Text style={styles.nameText}>
            이름
            <Text style={styles.whoAmIText}>, 자기 소개</Text>
          </Text>
        </View>

        <Text style={styles.hashTagText}>#페이스북 #node.js #facebook</Text>
        <Text style={styles.answerText}>내용이 들어갈 공간</Text>
      </View>
    );
  }
}

export default withNavigation(Card);
