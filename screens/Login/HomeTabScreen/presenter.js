import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './styles';

class HomeTabScreen extends React.Component {
  state = {
    isFetching: false,
    textOfQuestion: null,
  };

  render() {
    console.log('HomeTabScreen/presenter의 render()함수 안입니다.');

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.logoBox}>
            <Image
              style={styles.logo}
              resizeMode={'center'}
              source={require('../../../assets/images/logo(x4).png')}
            />
          </View>
          <View style={styles.questionBox}>
            <TextInput
              style={styles.textinputOfQuestion}
              value={this.state.textOfQuestion}
              placeholder={'빠르게 질문하세요!'}
              placeholderTextColor={'#555555'}
              onChangeText={text => {
                this.setState({ textOfQuestion: text });
              }}
              maxLength={100}
              multiline={true}
              underlineColorAndroid={'transparent'}
            />
            {this.state.textOfQuestion ? (
              <View style={styles.goDetailView}>
                <Text
                  style={styles.goDetailText}
                  onPress={() => alert('it works!')}
                >
                  세부 내용 작성하기
                </Text>
              </View>
            ) : null}
          </View>
          <TouchableOpacity onPress={() => alert('It works')}>
            <View style={styles.askButton}>
              <Text style={styles.askButtonText}>등록</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.space} />

          <View style={styles.cardContainer}>
            <Text style={styles.hashTagText}>#페이스북 #node.js #facebook</Text>
            <Text style={styles.titleText}>
              페이스북은 node_modules를 어떻게 관리하나요?
            </Text>
          </View>
          <View style={styles.cardRowContainer}>
            <Text>박정훈, 임주연 님 외 5명이 댓글을 달았습니다.</Text>
          </View>

          <View style={styles.space} />
        </ScrollView>
      </View>
    );
  }
}

export default HomeTabScreen;
