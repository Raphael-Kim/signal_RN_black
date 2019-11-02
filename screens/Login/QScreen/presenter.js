import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import styles from './styles';
import Card from '../../../components/Card(QScreen)';

class QScreen extends React.Component {
  state = {
    moreOn: false,
    QImages: null,
  };

  componentDidMount() {}

  render() {
    console.log('QScreen/presenter의 render()함수 안입니다.');

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}>질문 제목이 들어갈 곳</Text>
          </View>

          <View style={styles.hashtagBox}>
            <Text style={styles.hashtagText}>#해시태그</Text>
          </View>

          {this.state.moreOn === false ? (
            <Text
              style={styles.moreOnText}
              onPress={() => this.setState({ moreOn: true })}
            >
              내용 펼치기
            </Text>
          ) : null}

          {this.state.moreOn === true ? (
            <View>
              <Text style={styles.QText}>상세 내용이 들어갈 곳</Text>
              <Text
                style={styles.moreOnText}
                onPress={() => this.setState({ moreOn: false })}
              >
                내용 감추기
              </Text>
            </View>
          ) : null}

          {!this.state.QImages ? null : (
            <ScrollView
              contentContainerStyle={styles.QImageScrollBox}
              horizontal={true}
            >
              <View style={styles.QImageBox}>
                <Image
                  source={this.state.QImages}
                  style={styles.QImage}
                  resizeMode={'center'}
                />
              </View>
            </ScrollView>
          )}

          <View style={styles.QMetaBox}>
            <View style={styles.QMetaBoxL}>
              <View style={styles.numOfABox}>
                <Text style={styles.numOfATextL}>등록된 답변</Text>
                <Text style={styles.numOfATextR}>7개</Text>
              </View>

              <View style={styles.space} />

              <View style={styles.IDKTBox}>
                <Text style={styles.IDKTTextL}>나도 궁금해</Text>
                <Text style={styles.IDKTTextR}>7개</Text>
              </View>
            </View>

            <Text
              onPress={() => {
                alert('It works!');
              }}
              style={styles.addAText}
            >
              답변하기
            </Text>
          </View>

          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    );
  }
}

export default QScreen;
