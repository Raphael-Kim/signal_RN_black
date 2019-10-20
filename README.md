# signal_RN_black

> 1. https://facebook.github.io/react-native/blog/2019/07/03/version-60: Announcing React Native 0.60  
  a. 'CocoaPods by Default', 'Native Modules are now Autolinked'부분 읽어보기.
  
> 2. react-native-kakao-logins  
  a. 'node_modules/react-native-kakao-logins/android/src/res/kakao_strings.xml'에서 앱 키를 5a5185a9f524afa53645953650ba090b로 바꾸기
  b. https://github.com/react-native-seoul/react-native-kakao-logins: README.md
    - installation과 post installation 두 부분이 나오는데, 안드로이드 같은 경우는 Autolinked 덕분에 post installation만 해주면 됐었음.
  
> 3. react-navigation  
  a. https://reactnavigation.org/docs/en/getting-started.html:
    - 'React Native 0.60 and higher' 부분 읽고 따라하면 될 듯.
    - react-native-gesture-handler, react-native-reanimated, react-native-screens는 이미 깔려 있어서 안깔아도 됨.
  
> 4. react-native-vector-icons  
  a. https://github.com/oblador/react-native-vector-icons#android: README.md
    - 'Option: With CocoaPods' 부분 읽어보면 될 듯.
  
> 5. eslint  
  a. vs code extensions에 들어가서 eslint 다운 받을 것.  
  b. vs code extensions에 들어가서 prettier 다운 받을 것.  
  c. vs code settings에 들어가서 eslint 검색한 후 Auto Fix On Save 체크

<hr/>

> 6. react-native-image-picker  
  a. https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Install.md:
    - 'IOS install' 부분 읽고 따라하면 될 듯.
  b. react-native-image-crop-picker로 바꿀까 고민 중.  
    - https://github.com/ivpusic/react-native-image-crop-picker
    - 장점: 이미지 복수 선택, 자르기(crop) 기능.

> 7. AddQScreen에서 image를 가져온 후 aws(서버)와 연동하기.  
    => 왠만하면 함수는 render 밖으로 빼자 뷰 보기가 힘들기도 하고, fetch 넣으면 노답 될 듯

> 8. AddQScreen에서 text를 서버 DB와 연동하기.  
  a. 작성된 코드 참고하기(해시 태그 구현: text를 space단위로 쪼개놓음) 
    => state에 hashtag 5개 만들어두고 space로 쪼갠걸 각 state에 넣어두는 건 어떨지
  b. 질문/제목/해시태그(개수만큼)/을 구분해서 저장할 것!  
  
> 9. AddQScreen에서 불러운 Image를 클릭했을 때, (이미지에 대한)설명을 달 수 있도록 모달 제작.

