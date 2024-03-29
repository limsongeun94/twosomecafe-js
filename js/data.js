const data = [
  {
    name: "아메리카노",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/10100001_01_01_20210611.jpg?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "coffee",
    text: "진하게 로스팅한 커피 원두에서 에스프레소를 추출하여 투썸 고유의 원두 풍미를 느낄 수 있는 에스프레소 음료",
  },
  {
    name: "카페라떼",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/10100002_01_01_20210611.jpg?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "coffee",
    text: "풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료",
  },
  {
    name: "바닐라카페라떼",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/105.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "coffee",
    text: "달콤한 바닐라 향과 풍부한 에스프레소가 조화를 이룬 부드러운 라떼",
  },
  {
    name: "카푸치노",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/174.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "coffee",
    text: "풍부하고 진한 농도의 에스프레소 위에 스팀밀크와 부드럽고 풍부한 양의 우유거품을 올린 에스프레소 음료",
  },
  {
    name: "에스프레소",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/114.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "coffee",
    text: "카라멜 향과 더불어 달콤쌉싸름한 맛을 느낄 수 있는 깊고 진한 풍미의 에스프레소 음료",
  },
  {
    name: "콜드브루",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/123.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "coffee",
    text: "커피 본연의 깊은 풍미와 단맛이 느껴지는 부드럽고 깔끔한 콜드브루 커피",
  },
  {
    name: "콜드브루라떼",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/124.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "coffee",
    text: "콜드브루와 우유가 어우러져 더욱 부드럽게 즐길 수 있는 콜드브루 라떼",
  },
  {
    name: "제주유기농녹차",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/10201605_01_01_20210818.jpg?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "tea",
    text: "청정 제주산 유기농 녹차 100%",
  },
  {
    name: "카모마일",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/10200025_01_01_20210115.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "tea",
    text: "카페인이 없어 누구나 편안하게 즐길 수 있는 허브티로, 풍부한 벌꿀향과 황금빛이 특징인 TWG TEA",
  },
  {
    name: "얼그레이",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/132.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "tea",
    text: "산뜻한 과일향과 수레국화의 향긋한 향이 느껴지는 TWG TEA",
  },
  {
    name: "민트",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/10200028_01_01_20210610.jpg?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "tea",
    text: "홍차, 녹차, 민트가 블렌딩 된 청량한 타입의 TWG TEA",
  },
  {
    name: "허니레몬티",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/10200030_01_01_20210610.jpg?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "tea_variation",
    text: "진한 TWG TEA 프렌치 얼그레이 베이스에 달콤한 꿀과 상큼한 레몬이 더해진 TWG 베리에이션 티",
  },
  {
    name: "로얄밀크티",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/10200033_01_01_20210610.jpg?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "tea_variation",
    text: "향긋한 홍차향과 부드러운 우유가 어우러진 정통 밀크티",
  },
  {
    name: "그린티라떼",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/10200034_01_01_20210610.jpg?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "tea_variation",
    text: "그린티 파우더와 우유가 조화로운 부드러운 티 라떼",
  },
  {
    name: "달고나카페라떼",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/120.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "newtro_taste",
    text: "로스팅 슈가 향의 에스프레소 크림과 추억의 달고나가 어우러진 카페 라떼",
  },
  {
    name: "흑임자카페라떼",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/10100020_01_01_20210611.jpg?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "newtro_taste",
    text: "고소한 흑임자에 깊은 에스프레소를 곁들여 달콤하고 감미롭게 즐길 수 있는 라떼",
  },
  {
    name: "고구마라떼",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/10300038_01_01_20210610.jpg?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "newtro_taste",
    text: "고구마를 통째로 갈아넣어 원물감이 살아있는 리얼 라떼",
  },
  {
    name: "키위바나나주스",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/167.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "blended_fruit",
    text: "그린키위와 바나나가 블렌딩 된 주스",
  },
  {
    name: "망고바나나라떼",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/10300055_01_01_20210611.jpg?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "blended_fruit",
    text: "달콤한 망고와 바나나의 조화를 느낄 수 있는 부드러운 라떼",
  },
  {
    name: "오렌지자몽티",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/141.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "ade_fruittea",
    text: "달콤한 오렌지와 자몽이 그대로 느껴지는 과일 티",
  },
  {
    name: "유자레몬티",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/140.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "ade_fruittea",
    text: "달콤쌉사름한 유자청과 레몬즙이 어우러진 상큼한 시트러스 티",
  },
  {
    name: "레몬셔벗에이드",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/164.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "ade_fruittea",
    text: "드라이한 샴페인 향과 생라임, 민트 잎이 어우러져 시원하고 청량하게 즐길 수 있는 에이드",
  },
  {
    name: "자몽에이드",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/162.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "ade_fruittea",
    text: "자몽의 상큼함과 스파클링의 청량감이 입 안 가득 느껴지는 자몽 에이드",
  },
  {
    name: "오렌지에이드",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/163.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "ade_fruittea",
    text: "달콤한 오렌지의 맛과 스파클링의 청량함이 느껴지는 오렌지 에이드",
  },
  {
    name: "로얄밀크티쉐이크",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/161.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "ice_blended",
    text: "은은한 얼그레이 향이 감도는 블랙 티와 진한 소프트 아이스크림이 어우러진 투썸 아이스크림 디저트 음료",
  },
  {
    name: "바닐라밀크쉐이크",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/158.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "ice_blended",
    text: "바닐라 아이스크림과 우유를 블렌딩한 부드럽고 달콤한 쉐이크",
  },
  {
    name: "초코밀크쉐이크",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/159.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "ice_blended",
    text: "바닐라 아이스크림과 초콜릿의 진한 풍미를 즐길 수 있는 쉐이크",
  },
  {
    name: "요거트프라페",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/155.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "ice_blended",
    text: "요거트 파우더와 우유로 만든 깔끔하고 상큼한 맛의 요거트 아이스 블렌디드",
  },
  {
    name: "모카칩커피프라페",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/10300039_01_01_20210209.jpg?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "ice_blended",
    text: "모카 향이 은은하게 입 안에 감돌아 달콤함과 향긋함을 동시에 느낄 수 있는 커피 프라페",
  },
  {
    name: "제주말차프라페",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/157.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "ice_blended",
    text: "제주산 말차와 연유 블렌딩이 조화로운 프리미엄 말차 프라페",
  },
  {
    name: "스트로베리피치프라페",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/154.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "ice_blended",
    text: "딸기와 복숭아의 상큼함이 조화롭게 어우러진 스무디 타입 음료",
  },
  {
    name: "망고프라페",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/156.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "ice_blended",
    text: "열대 망고의 시원한 맛을 느낄 수 있는 프라페",
  },
  {
    name: "블루베리요거트드링크",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/169.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "other",
    text: "깊고 진한 블루베리 풍미와 요거트의 조화를 느낄 수 있는 음료",
  },
  {
    name: "플레인요거트드링크",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/170.png?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "other",
    text: "요거트의 깊은 풍미를 즐길 수 있는 음료",
  },
  {
    name: "초콜릿라떼",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/10300036_01_01_20210525.JPG?width=600&height=600&q=100",
    main_menu: "beverage",
    sub_menu: "other",
    text: "초콜릿의 풍부한 맛과 휘핑크림, 초코칩이 조화로운 달콤한 초콜릿 음료",
  },
  {
    name: "소프트아이스크림",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/20501691_01_01_20210611.jpg?width=600&height=600&q=100",
    main_menu: "ice_cream",
    sub_menu: "ice_cream",
    text: "입 안 가득 꽉 차는 크리미한 풍미의 부드러운 소프트 아이스크림",
  },
  {
    name: "바닐라아포가토",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/171.png?width=600&height=600&q=100",
    main_menu: "ice_cream",
    sub_menu: "ice_cream",
    text: "바닐라 아이스크림에 초콜릿 소스와 발로나 파우더가 어우러진 투썸의 시그니처 디저트",
  },
  {
    name: "스트로베리초콜릿생크림",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30701708_01_01_20211228.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "whole_cake",
    text: "한가득 올린 상큼한 딸기, 크런치 초코볼이 초코 생크림 사이사이 씹히는 투썸 베스트 생크림 케이크",
  },
  {
    name: "딸기생크림1호",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30701694_01_01_20220321.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "whole_cake",
    text: "담백한 생크림과 부드러운 시트에 딸기를 풍성하게 올린 생크림 케이크",
  },
  {
    name: "레드벨벳",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30701799_01_01_20211228.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "whole_cake",
    text: "붉은 컬러의 레드벨벳 4단 시트에 과일 데코레이션으로 상큼함을 더하고, 진한 크림치즈로 아이싱한 케이크",
  },
  {
    name: "마스카포네생크림(믹스드베리)",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30701711_01_01_20211228.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "whole_cake",
    text: "하얀 케익 시트 속에 마스카포네 생크림과 딸기가 어우러져 새콤달콤하게 즐길 수 있는 케이크",
  },
  {
    name: "마스카포네티라미수",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30701798_01_01_20211228.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "whole_cake",
    text: "마스카포네 치즈를 사용한 부드러운 크림과 진한 커피 시럽을 바른 시트를 사용하고, 순도높은 카카오 파우더로 마무리한 이탈리안 무스",
  },
  {
    name: "밀키프로마쥬무스(딸기)",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30701932_01_01_20220322.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "whole_cake",
    text: "부드러운 식감의 구움치즈케이크와 담백한 치즈우유무스가 어우러진 밀키 프로마쥬 무스케이크",
  },
  {
    name: "파티팩아이스박스",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30701705_01_01_20211228.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "party_pack",
    text: "마스카포네 크림 사이사이 블랙쿠키를 층층이 쌓고 촉촉하게 수분이 전이되어 부드럽게 즐길 수 있는 아메리칸 스타일의 케이크",
  },
  {
    name: "파티팩티라미수",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30701703_01_01_20211228.JPG?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "party_pack",
    text: "마스카포네 치즈와 에스프레소 시럽으로 샌드된 촉촉한 시트 위에 코코아 파우더를 올린 이탈리아 대표 무스 케이크",
  },
  {
    name: "파티팩스트로베리초콜릿생크림",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30701736_01_01_20211228.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "party_pack",
    text: "스트로베리 초콜릿 생크림맛 그대로! 한가득 올린 상큼한 딸기, 크런치 초코볼이 알알이 씹히는 진한 초콜릿 생크림 시트가 조화를 이루는 디저트",
  },
  {
    name: "파티팩딸기레어치즈",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30701785_01_01_20211228.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "party_pack",
    text: "상큼한 딸기퓨레와 부드러운 크림치즈, 고소한 크럼블, 라즈베리가 함께 어우러진 봄을 닮은 상큼한 떠먹는 케이크",
  },
  {
    name: "P.밀키프로마쥬무스(딸기)",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30801847_01_01_20220311.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "short_cake",
    text: "부드러운 식감의 구움치즈케이크와 담백한 치즈우유무스가 어우러진 밀키 프로마쥬 무스케이크",
  },
  {
    name: "P.뉴욕치즈",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30801718_01_01_20210610.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "short_cake",
    text: "부드럽고 촉촉한 식감과 진한 치즈 맛을 느낄 수 있는 뉴욕스타일의 구움 치즈케이크",
  },
  {
    name: "P.딸기생크림",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30801809_01_01_20210614.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "short_cake",
    text: "담백한 생크림과 부드러운 시트에 딸기 데코레이션이 고급스러운 케이크",
  },
  {
    name: "P.벨지안가나슈",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30801722_01_01_20210610.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "short_cake",
    text: "벨기에산 다크 초콜릿 가나슈와 시트 사이사이 초코 크런치, 크럼블로 바삭한 식감을 더한 케이크",
  },
  {
    name: "P.퀸즈캐롯",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30801806_01_01_20210610.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "short_cake",
    text: "담백한 당근과 상큼한 오렌지 필로 식감을 살린 촉촉한 캐롯 시트와 묵직한 크림치즈를 풍성하게 레이어한 영국식 티 케이크",
  },
  {
    name: "P.투썸얼그레이밀크티쉬폰",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30801843_01_01_20220516.JPG?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "short_cake",
    text: "TWG TEA 우려낸 향긋한 밀크티 크림과 가나슈가 폭신한 쉬폰 시트와  어우러진 달콤하고 부드러운 밀크티 쉬폰 케이크",
  },
  {
    name: "떠먹는아이스박스",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30801704_01_01_20210118.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "spoon_cake",
    text: "마스카포네 크림 사이사이 블랙쿠키를 층층이 쌓고 촉촉하게 수분이 전이되어 부드럽게 즐길 수 있는 아메리칸 스타일의 케이크",
  },
  {
    name: "떠먹는티라미수",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30801702_01_01_20210118.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "spoon_cake",
    text: "마스카포네 치즈와 에스프레소 시럽으로 샌드된 촉촉한 시트 위에 코코아 파우더를 올린 이탈리아 대표 무스 케이크",
  },
  {
    name: "떠먹는스트로베리초콜릿생크림",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30801735_01_01_20210118.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "spoon_cake",
    text: "한 가득 올린 상큼한 딸기, 크런치 초코볼이 알알이 씹히는 진한 초콜릿 생크림 시트가 조화를 이루는 디저트",
  },
  {
    name: "떠먹는딸기레어치즈",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30801784_01_01_20210615.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "spoon_cake",
    text: "상큼한 딸기퓨레와 부드러운 크림치즈, 고소한 크럼블, 라즈베리가 함께 어울려 봄을 닮은 맛의 떠먹는 케이크",
  },
  {
    name: "아이스샌드 딸기바닐라",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30901846_01_01_20220525.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "dessert",
    text: "부드러운 화이트 시트 사이 커스터드 생크림과 새콤달콤한 딸기 꿀리가 샌드된 프로즌 딸기바닐라 아이스샌드",
  },
  {
    name: "아이스샌드 쿠키앤크림",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30901845_01_01_20220525.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "dessert",
    text: "다크 코코아 시트 사이 마스카포네 치즈크림과 진한 블랙쿠키, 쿠키크럼블이 샌드된 프로즌 쿠키앤크림 아이스샌드",
  },
  {
    name: "아이스슈 바닐라&초콜릿",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30901847_01_01_20220525.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "dessert",
    text: "우유 생크림, 바닐라 커스터드 크림의 바닐라 슈와 초콜릿 커스터드 크림의 초콜릿 슈 4개입으로 구성된 프로즌 썸머 디저트",
  },
  {
    name: "생크림소프트쉬폰",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30901737_01_01_20210610.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "dessert",
    text: "부드러운 텍스쳐의 쉬폰과 신선한 생크림을 곁들여 먹는 미니 디저트",
  },
  {
    name: "초콜릿크로캉롱슈",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30901727_01_01_20210610.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "dessert",
    text: "이탈리아산 초콜릿 크림과 베리잼이 어우러져 달콤함과 상큼한 맛을 동시에 느낄 수 있는 디저트",
  },
  {
    name: "바닐라크로캉롱슈",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/30901728_01_01_20210610.jpg?width=600&height=600&q=100",
    main_menu: "cake",
    sub_menu: "dessert",
    text: "고소하고 바삭한 아몬드칩이 콕콕 박힌 슈 안에 바닐라빈 커스터드 크림을 듬뿍 채워 아몬드칩의 식감과 달콤한 크림의 맛을 함께 즐길 수 있는 디저트",
  },
  {
    name: "B.E.L.T.샌드위치",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/301.png?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "sandwich",
    text: "부드러운 우유식빵에 레몬마요네즈 스프레드하고 베이컨, 달걀, 로메인, 레터스, 토마토를 넣은 기본 샌드위치",
  },
  {
    name: "스파이시치킨샐러드랩",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/303.png?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "sandwich",
    text: "치킨 텐더 샐러드와 매콤한 할라피뇨가 어우러진 스파이시 치킨 샐러드랩",
  },
  {
    name: "페스토햄치즈파니니",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/351.png?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "sandwich",
    text: "터키브레스트햄, 에멘탈치즈, 후레쉬 모짜렐라 치즈에 바질페스토가 어우러진 치아바타 HOT 샌드위치",
  },
  {
    name: "클래식루벤",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/313.png?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "sandwich",
    text: "비프 파스트라미, 사워크라우트, 에멘탈 치즈로 만든 클래식 루벤 샌드위치",
  },
  {
    name: "칠리소시지바게트샌드위치",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/309.png?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "sandwich",
    text: "탱글탱글한 소시지와 칠리미트 소스, 그리고 고소한 치즈가 매력적인 바게트 샌드위치",
  },
  {
    name: "크로크무슈",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/317.png?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "sandwich",
    text: "두툼한 식빵에 터키브레스트 햄과 뮌스터 치즈를 넣은 담백하고 든든한 샌드위치",
  },
  {
    name: "#베리머치감자",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/41001867_01_01_20220228.jpg?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "sandwich",
    text: "포슬포슬한 감자 샐러드를 풍성하게 채운 브리오슈 번",
  },
  {
    name: "베이컨체다베이글",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/41001865_01_01_20220228.jpg?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "sandwich",
    text: "베이컨과 치즈의 풍미를 듬뿍 느낄 수 있는 뉴욕식 핫 베이글",
  },
  {
    name: "그릴드치킨샐러드",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/320.png?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "salad",
    text: "그릴드 치킨과 신선한 토마토, 채소가 어우러진 샐러드",
  },
  {
    name: "쉬림프에그샐러드",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/41101878_01_01_20220519.jpg?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "salad",
    text: "탱글한 새우와 촉촉한 계란, 토마토와 신선한 채소로 산뜻한 샐러드",
  },
  {
    name: "프레시리코타치즈샐러드",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/41101877_01_01_20220519.jpg?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "salad",
    text: "부드러운 리코타 치즈를 듬뿍! 풍성하고 신선한 치즈 샐러드",
  },
  {
    name: "아이스크림크로플",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/324.png?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "others",
    text: "겉은 바삭, 속은 촉촉한 크로플 위에 바닐라 아이스크림, 메이플 시럽을 올려 커피와 함께 먹기 좋은 브런치",
  },
  {
    name: "카라멜버터토스트",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/326.png?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "others",
    text: "부드러운 생크림과 달콤한 카라멜 시럽을 더한 달콤 촉촉 버터 토스트",
  },
  {
    name: "플레인그릭요거트",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/41301878_01_01_20210614.jpg?width=600&height=600&q=100",
    main_menu: "deli",
    sub_menu: "others",
    text: "통곡물의 풍부한 영양소가 담긴 그래놀라가 어우러진 건강한 그릭 요거트",
  },
  {
    name: "호두베이글",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/51401917_01_01_20210118.png?width=600&height=600&q=100",
    main_menu: "bread",
    sub_menu: "bread",
    text: "쫄깃한 식감에 고소함을 더해주는 호두가 들어간 베이글",
  },
  {
    name: "쟌슨빌소시지페이스트리",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/51491004_01_01_20220302.jpg?width=600&height=600&q=100",
    main_menu: "bread",
    sub_menu: "bread",
    text: "육즙을 머금은 촉촉한 쟌슨빌 소시지를 품은 크루아상",
  },
  {
    name: "올리브치즈브레드",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/51491003_01_01_20220302.jpg?width=600&height=600&q=100",
    main_menu: "bread",
    sub_menu: "bread",
    text: "올리브, 롤치즈가 콕콕 박힌 담백한 빵",
  },
  {
    name: "코코넷카야크루아상",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/51491002_01_01_20220302.jpg?width=600&height=600&q=100",
    main_menu: "bread",
    sub_menu: "bread",
    text: "향긋한 코코넛칩 토핑과 카야잼으로 채운 크루아상",
  },
  {
    name: "브리오슈슈크레",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/51490993_01_01_20210819.jpg?width=600&height=600&q=100",
    main_menu: "bread",
    sub_menu: "bread",
    text: "버터 풍미 가득한 브리오슈 빵위에 달콤한 우박 설탕과 슈크림이 토핑된 베이커리",
  },
  {
    name: "에그베이컨페이스트리",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/51490989_01_01_20210819.jpg?width=600&height=600&q=100",
    main_menu: "bread",
    sub_menu: "bread",
    text: "베이컨과 계란 1알이 그대로 들어가 간편한 식사 대용으로 좋은 베이커리",
  },
  {
    name: "생미쉘시트러스마들렌",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/51501101_01_01_20201124.jpg?width=600&height=600&q=100",
    main_menu: "bread",
    sub_menu: "confection",
    text: "상큼한 오렌지, 만다린필로 향긋하고 부드러운 마들렌",
  },
  {
    name: "까눌레",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/51501102_01_01_20210412.jpg?width=600&height=600&q=100",
    main_menu: "bread",
    sub_menu: "confection",
    text: "카라멜라이즈 되어 바삭한 첫 식감과 촉촉쫀득한 바닐라 맛의 조화. 프랑스 보르도 전통 디저트",
  },
  {
    name: "TWG밀크티파운드",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/331.png?width=600&height=600&q=100",
    main_menu: "bread",
    sub_menu: "confection",
    text: "TWG 얼그레이 밀크티 향이 입 안 가득 퍼지는 부드러운 파운드 케이크",
  },
  {
    name: "다크피칸브라우니",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/51501953_01_01_20220106.jpg?width=600&height=600&q=100",
    main_menu: "bread",
    sub_menu: "confection",
    text: "피칸과 블랙쿠키가 올라가 풍성하게 즐기는 쫀득한 다크 브라우니",
  },
  {
    name: "월넛초코칩쿠키",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/51501951_01_01_20220106.jpg?width=600&height=600&q=100",
    main_menu: "bread",
    sub_menu: "confection",
    text: "밀크 초코칩과 호두로 채워 쫀득한 식감을 즐길 수 있는 쿠키",
  },
  {
    name: "휘낭시에_글루텐프리",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/51501948_01_01_20220322.jpg?width=600&height=600&q=100",
    main_menu: "bread",
    sub_menu: "confection",
    text: "밀가루 대신 쌀가루, 아몬드분말로 만든 쫀득하고 달콤한 구움과자",
  },
  {
    name: "무화과스콘",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/51501946_01_01_20220126.jpg?width=600&height=600&q=100",
    main_menu: "bread",
    sub_menu: "confection",
    text: "톡톡 씹히는 무화과가 달콤한 스콘",
  },
  {
    name: "블랙그라운드_200G",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/72002141_01_01_20210108.jpg?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "coffee_bean",
    text: "입안 가득 꽉 찬 바디감과 다크 초콜릿의 향이 느껴지는 원두",
  },
  {
    name: "아로마노트_200G",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/72002142_01_01_20210108.jpg?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "coffee_bean",
    text: "플로럴한 아로마와 함께 싱그러운 과일향이 느껴지는 원두",
  },
  {
    name: "SWP디카페인_200G",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/72002225_01_01_20220404.jpg?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "coffee_bean",
    text: "견과류의 고소함과 은은한 단맛이 조화로운 디카페인 원두",
  },
  {
    name: "a-LIST_콜드브루RTD원액",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/72102129_01_01_20210507.jpg?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "processed_products",
    text: "가정에서 즐기는 깊고 진한 투썸 콜드브루 커피원액500ml",
  },
  {
    name: "a-LIST_스틱커피",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/72102216_01_01_20210108.jpg?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "processed_products",
    text: "풍부한 바디감과 은은한 단맛이 균형을 이루는 스틱커피",
  },
  {
    name: "a-LIST_바닐라라떼",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/72102179_01_01_20210108.jpg?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "processed_products",
    text: "진한 커피의 향과 리치한 바닐라의 달콤한 풍미가 조화롭게 어울리는 바닐라라떼",
  },
  {
    name: "TWG프렌치얼그레이MD",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/72102087_01_01_20210107.jpg?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "processed_products",
    text: "TWG의 대표적인 얼그레이 계열의 홍차. 클래식하면서 우아한 시트러스 과일향과 수레국화의 향긋한 향이 매력적인 TEA",
  },
  {
    name: "TWG카모마일MD",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/72102090_01_01_20210107.jpg?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "processed_products",
    text: "카페인이 없어 누구나 편안하게 즐길 수 있는 허브티로, 풍부한 벌꿀향과 황금빛이 매력적인 TEA",
  },
  {
    name: "원터치텀블러(아로마화이트)",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/72201174_01_01_20210107.jpg?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "md",
    text: "원터치 버튼으로 쉽고 안전하게 오픈이 가능하면서, 슬라이드락 잠금 장치가 있어 가방속에 음료가 쏟아질 염려가 없는 실용적인 이중 진공벽 텀블러",
  },
  {
    name: "투썸스텐보틀_네이비",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/72202295_01_01_20210805.jpg?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "md",
    text: "테라조 무늬가 디자인된 보온,보냉 기능이 있는 보틀형 텀블러 (500ml)",
  },
  {
    name: "투썸베이직스텐머그_그레이",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/414.png?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "md",
    text: "깨질 걱정없는 스테인레스 재질의 머그. 뚜껑이 있어 먼지를 막고 온도 유실을 막고 이중 스테인레스 구조로 생활 보온/보냉 가능한 실용적인 제품",
  },
  {
    name: "투썸베이직스텐텀블러_화이트",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/415.png?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "md",
    text: "베이직하고 깔끔한 디자인의 사무용 텀블러. 이중구조로 생활 보온 보냉이 가능",
  },
  {
    name: "투썸화이트머그",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/408.png?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "md",
    text: "여성스러운 쉐입의 머그. 넓은 손잡이로 좋은 그립감",
  },
  {
    name: "브론즈라벨머그(블랙)",
    img: "https://mcdn.twosome.co.kr/menu_image/P_MA_Z_TSPLC_MENU_REG/1000/1000/PITEM/420.png?width=600&height=600&q=100",
    main_menu: "md",
    sub_menu: "md",
    text: "브론즈 라벨에 투썸 로고를 레이저 프린팅한 세련된 무관 코팅 머그",
  },
];
