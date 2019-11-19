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
import Amplify, { Auth, Storage } from 'aws-amplify';

Amplify.configure({
  Auth: {
    identityPoolId: 'ap-northeast-2:564bf062-96a0-4239-86db-0bc098d333e3', //REQUIRED - Amazon Cognito Identity Pool ID
    region: 'ap-northeast-2', // REQUIRED - Amazon Cognito Region
  },
  Storage: {
    AWSS3: {
      bucket: 'for-fromme', //REQUIRED - Amazon S3 bucket
      region: 'ap-northeast-2', //OPTIONAL - Amazon service region
    },
  },
});

class AddQScreen extends React.Component {
  state = {
    textOfQuestion: null,
    textOfTitle: null,
    textOfHashtag: null,
  };

  componentDidMount() {
    this.setState({
      textOfTitle: this.props.navigation.getParam('textOfTitle', null),
    });
  }

  checkHashtag() {
    //define delimiter
    let delimiter = /\s+/;

    //split string
    let _text = this.state.textOfHashtag;
    console.log(_text);

    let token,
      index,
      parts = [];

    while (_text) {
      delimiter.lastIndex = 0;
      token = delimiter.exec(_text);
      console.log(token, '→ token');

      if (token === null) {
        break;
      }

      index = token.index;
      console.log(token.index, '→ token.index');

      if (token[0].length === 0) {
        console.log('token[0].length === 0');
        index = 1;
      }

      parts.push(_text.substr(0, index));
      parts.push(token[0]);

      index = index + token[0].length;
      _text = _text.slice(index);
    }

    parts.push(_text);
    console.log(parts);

    //highlight hashtags
    parts = parts.map(text => {
      if (/^#\w+/.test(text)) {
        return (
          <Text key={text} style={{ color: '#3C7DFC' }}>
            {text}
          </Text>
        );
      } else {
        return text;
      }
    });

    return parts;
  }

  render() {
    console.log('AddQScreen/presenter의 render()함수 안입니다.');
    const parts = this.checkHashtag();

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          // 키보드가 show인 상태에서 버튼 클릭 시, dismiss되는 것이 아니라 버튼이 작동 되도록
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
            <TextInput
              style={styles.textinputOfHashtag}
              placeholder={'해시 태그를 입력하세요!'}
              placeholderTextColor={'#555555'}
              onChangeText={text => {
                this.setState({ textOfHashtag: text });
              }}
              multiline={true}
              underlineColorAndroid={'transparent'}
            >
              <Text>{parts}</Text>
            </TextInput>
          </View>

          <View style={styles.line} />

          <View style={styles.addImageBox}>
            <Text
              style={styles.addImageText}
              onPress={() => {
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
                    console.log(
                      'User tapped custom button: ',
                      response.customButton,
                    );
                  } else {
                    const source = { uri: response.uri };

                    // You can also display the image using data:
                    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                    this.setState({
                      imageSource: source,
                    });
                  }
                });
              }}
            >
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

export default AddQScreen;
