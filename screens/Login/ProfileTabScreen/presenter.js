import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Card from '../../../components/Card(HomeTabScreen)';

class ProfileTabScreen extends React.Component {
  state = {
    // textOfQuestion: null,
    cardArray: [
      {
        cardNum: 1,
        hashtag: '#페이스북 #node.js #facebook',
        title: '페이스북은 node_modules를 어떻게 관리하나요?',
        answerer: ['박정훈', '임주연'],
      },
      {
        cardNum: 2,
        hashtag: '#페이스북 #node.js #facebook',
        title: '페이스북은 node_modules를 어떻게 관리하나요?',
        answerer: ['박정훈', '임주연'],
      },
    ],
  };

  render() {
    console.log('ProfileTabScreen/presenter의 render()함수 안입니다.');

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.topBox}>
            <ImageBackground
              source={require('../../../assets/images/profileTabBG.png')}
              style={styles.topImage}
              resizeMode={'stretch'}
            >
              <View style={styles.modifyProfileIconV}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/images/modifyProfileIcon.png')}
                    style={styles.modifyProfileIcon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.contents}>
                <Image
                  source={require('../../../assets/images/profileImageSample.png')}
                  style={styles.profileImage}
                />

                <View style={styles.nameBox}>
                  <Text style={styles.nameFont}>이름</Text>
                </View>

                <Text style={styles.whoIAmFont}>자기 소개</Text>

                <View style={styles.metaBox}>
                  <TouchableOpacity>
                    <View style={styles.followBox}>
                      <Text style={styles.followFontL}>Follow</Text>
                      <Text style={styles.followFontR}>9.99k</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View style={styles.followingBox}>
                      <Text style={styles.followingFontL}>Following</Text>
                      <Text style={styles.followingFontR}>9.99k</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.followButtonTO}>
                  <View style={styles.followButton}>
                    <Text style={styles.followButtonFont}>Follow</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {this.state.cardArray.map(data => {
            return <Card key={data.cardNum} />;
          })}

        </ScrollView>
      </View>
    );
  }
}

export default ProfileTabScreen;
