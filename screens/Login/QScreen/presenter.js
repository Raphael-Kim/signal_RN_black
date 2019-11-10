import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import styles from './styles';
import ACard from '../../../components/ACard(QScreen)';

class QScreen extends React.Component {
  state = {
    moreOn: false,
    QImages: null,
    titleOfQuestion: null,
  };

  componentDidMount() {
    this.setState({
      titleOfQuestion: this.props.navigation.getParam('textOfTitle', null),
    });
  }

  render() {
    console.log('QScreen/presenter의 render()함수 안입니다.');
    const { titleOfQuestion } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}>{titleOfQuestion}</Text>
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
                this.props.navigation.navigate('AddAScreen', {
                  titleOfQuestion: this.state.titleOfQuestion,
                });
              }}
              style={styles.addAText}
            >
              답변하기
            </Text>
          </View>

          <ACard />
          <ACard />
          <ACard />
          <ACard />
        </ScrollView>
      </View>
    );
  }
}

export default QScreen;
