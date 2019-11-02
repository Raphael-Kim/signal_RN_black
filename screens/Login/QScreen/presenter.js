import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import styles from './styles';

class QScreen extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    console.log('QScreen/presenter의 render()함수 안입니다.');

    return (
      <View style={styles.container}>
        <ScrollView
          // keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.titleBox}>
            <Text style={styles.textOfTitle}>질문 제목이 들어갈 곳?</Text>
          </View>

          <Text>상세 내용 보기</Text>

          <View style={styles.uploadImageBox}>
            <Image
              source={this.state.imageSource}
              style={styles.uploadImage}
              resizeMode={'center'}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default QScreen;
