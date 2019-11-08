import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

class AddAScreen extends React.Component {
  state = {
    titleOfQuestion: null,
    moreOn: false,
    QImages: null,
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~
    textOfAnswer: null,
  };

  componentDidMount() {
    this.setState({
      titleOfQuestion: this.props.navigation.getParam('titleOfQuestion', null),
    });
  }

  addAImages() {
    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: 'Select Avatar',
      customButtons: [
        // { name: 'fb', title: 'Choose Photo from Facebook' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          imageSource: source,
        });
      }
    });
  }

  render() {
    console.log('AddAScreen/presenter의 render()함수 안입니다.');
    const { titleOfQuestion } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          // 키보드가 show인 상태에서 버튼 클릭 시, dismiss되는 것이 아니라 버튼이 작동 되도록
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.questionBox}>
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

            {this.state.QImages ? (
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
            ) : null}
          </View>

          <View style={styles.answerBox}>
            <TextInput
              style={styles.textinputOfAnswer}
              value={this.state.textOfAnswer}
              placeholder={'답변을 입력하세요!'}
              placeholderTextColor={'#555555'}
              onChangeText={text => {
                this.setState({ textOfAnswer: text });
              }}
              // autoFocus={true}
              maxLength={1000}
              multiline={true}
              underlineColorAndroid={'transparent'}
            />
          </View>

          <View style={styles.addImageBox}>
            <Text style={styles.addImageText} onPress={() => this.addAImages()}>
              이미지 등록하기
            </Text>
            <View style={styles.uploadImageBox}>
              <Image
                source={this.state.imageSource}
                style={styles.uploadImage}
                resizeMode={'center'}
              />
            </View>
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

export default AddAScreen;
