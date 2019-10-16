import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './styles';

class AddQScreen extends React.Component {
  state = {
    textOfQuestion: null,
    textOfTitle: null,
  };

  componentDidMount() {
    this.setState({
      textOfTitle: this.props.navigation.getParam('textOfTitle', null),
    });
  }

  render() {
    console.log('AddQScreen/presenter의 render()함수 안입니다.');

    return (
      <View style={styles.container}>
        <ScrollView
          // keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.titleBox}>
            <TextInput
              style={styles.textinputOfTitle}
              value={this.state.textOfTitle}
              placeholder={'제목을 입력하세요!'}
              placeholderTextColor={'#555555'}
              onChangeText={text => {
                this.setState({ textOfTitle: text });
              }}
              maxLength={100}
              multiline={true}
              underlineColorAndroid={'transparent'}
            />
          </View>

          <View style={styles.questionBox}>
            <TextInput
              style={styles.textinputOfQuestion}
              value={this.state.textOfQuestion}
              placeholder={'상세 내용을 입력하세요!'}
              placeholderTextColor={'#555555'}
              onChangeText={text => {
                this.setState({ textOfQuestion: text });
              }}
              // autoFocus={true}
              maxLength={1000}
              multiline={true}
              underlineColorAndroid={'transparent'}
            />
          </View>

          <View style={styles.hashtagBox}>
            <Text style={styles.hashtagText}>해시 태그(최대 5개)</Text>
          </View>

          <View style={styles.line} />

          <View style={styles.addImageBox}>
            <Text style={styles.addImageText}>이미지 등록하기</Text>
          </View>

          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles.askButton}>
              <Text style={styles.askButtonText}>등록</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default AddQScreen;
