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
];
