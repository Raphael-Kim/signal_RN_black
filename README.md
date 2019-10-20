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
--------------------------------------------------------------------------------------------------------------
끝난 것 체크 밋 서버에 보내고 받는 데이터 형식과 내용 변동 있으면 체크, 형식은 세세하게 설명해줘야함.

1. 로그인 
	1)  *카카오 네이티브 로그인 api 적용
    **나도 알려줘 버튼 때문에 푸시 노티피케이션 api 적용 필요.

    (이름, 카카오코드) => 유저 테이블 : 회원 코드, 이름, 카카오코드 + 프로필 이미지 주소, 직책 등의 설명
    받아옴 : 회원 코드, 이름, 회원 이미지
2. 홈  
    1) 질문 등록
        내용    
        해시태그
        이미지 등록
        등록버튼
    보냄 : (회원코드, 내용, 해시태그, 이미지)

    2) 질문 카드 리스트
        해시태그
        제목
        답변 단사람 프로필이미지
        답변 단 명 수
    받아옴 : 질문 번호, 질문 제목, 해시태그, 질문자 회원코드, 답변 단 사람들 회원 코드, 답변 단 사람들 회원 코드에 일치하는 프로필 이미지

3. 질문
    1) 질문 상세
        제목
        해시태그
        등록 답변 개수
        나도 궁금해 개수
        나도 궁금해 버튼
    받아옴 : 전 스크린으로부터{질문 번호, 질문 제목, 해시태그, 등록 답변 개수}, 나도 궁금해 개수
    보냄 : 나도 궁금해 버튼 클릭시 : 질문번호, 버튼 클릭한 사람 회원 번호

    2) 답변 리스트
        내용
        이름
        프로필 이미지
        사람 설명
    받아옴 : 답변 번호, 답변 번호와 일치하는 글의 내용, 답변자 회원코드와 일치하는 (이름, 프로필 이미지, 사람 설명)

    3)답변하기 버튼

4. 답변
    1)질문상세
    2)*해시태그
    3)답변 등록 칸
    4)이미지 추가 칸(일단은 홈페이지 url로 대체..?)
    5)등록 버튼 
    받아옴 : 전 스크린으로부터{질문 번호, 질문 제목, 해시태그}
    보냄 : 답변 내용, 답변 회원 코드, 이미지

5. 오피니언
    1)상세 내용
        제목
        이미지
        이름
        설명
        내용
        해시태그
        좋아요 버튼
        좋아요 개수
    받아옴 : 전 스크린으로부터{회원 번호, 번호에 일치하는 이름, 이미지, 사람 설명) 오피니언 번호, 오피니언 제목, 내용, 좋아요 버튼, 좋아요 리스트

    2)답글 달기
    보냄 : 오피니언 번호, 댓글 단 사람 회원 번호, 내용

6. 프로필
    1)이미지
    2)이름
    3)설명
    4)팔로워
    5)팔로잉
    6)팔로워 버튼
    7)관심 분야
    8)전문 분야
    9)등록한 오피니언 리스트
    10)오피니언 쓰기 버튼(내 프로필일 경우)
    받아옴 : 전 스크린으로부터{회원 번호}, 회원번호와 일치하는 {이미지, 이름, 설명, 팔로워 리스트, 팔로잉 리스트, 해쉬태그, 전문분야 리스트, 오피니언 번호, 오피니언 제목}

7. 해시태그 상세(해시태그 클릭시)
    1)*해시태그 팔로우 버튼
    2)*해시태그 관련 질문 리스트
    3)*해시태그 관련 오피니언 리스트
    해시태그 테이블 : 회원번호, 해시태그 5 칸


+오피니언 작성 화면 디자인 필요






