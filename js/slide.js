$(function() {
    mySlider = $("#bxslider").bxSlider({
    mode: "horizontal", // 수평방향으로 이동
    speed: 1000, // 이동속도(0.5초)
    moveSlides:2, //이동슬라이드수
    minSlides:4, // 최소노출슬라이드수
    maxSlides:4, // 최대노출슬라이드수
    slideWidth: 320, // 이미지가로길이
    slideMargin: 30, // 이미지 사이의 여백
    auto:true, // 자동슬라이드여
    autoHover:true, //마우스오버시자동정지
    controls:false, // 이전 다음 버튼을 숨김
    pager:true // 하단 동그라미 숨김 
    })
})

// ㅇㅇ이렇게