$(function() {
    $(".type_info").hide()
    // hover는 mouseover(마우스올라옴) 랑 mouseleave(마우스떠남) 가 같이 있는 거.
    // 콜백함수를 하나만 주면 mouseover, mouseleave에 모두 적용
    // 콜백함수를 두개 주면 먼저준 거는 mosueover, 나중에 준 거는 mosueleave를 처리해
    $(".space_design_img").hover(
        function() {
            $(".type_info").hide() // 밑으로 나열 방지
            var activeTab = $(this).attr("rel") // rel 속성은 a요소, link 요소, area 요소에 사용되며, 링크된 대상과의 관계를 지정합니다
            $("#" + activeTab).show() // 클릭한 대제목 li에 연결돼있는 rel 링크 대상인 하단구조의 id의 할당 보여줘
        },
        function() {
            $(".type_info").hide()
        }
    )
})

$(function() {
    $(".tab_box").hide()
    $("#detail").show()
    $(".product_tab_title li").click(function() {
        $(".product_tab_title li").removeClass("active").css({"background-color":"unset", "borderbottom":"1px solid #645959"}) // 다 active 빼고
        $(this).addClass("active").css({"background-color":"#ececee"}) // 클릭반응만 active 추가
        $(".tab_box").hide() // 밑으로 나열 방지
        var activeTab = $(this).attr("rel") // rel 속성은 a요소, link 요소, area 요소에 사용되며, 링크된 대상과의 관계를 지정합니다
        $("#" + activeTab).show() // 클릭한 대제목 li에 연결돼있는 rel 링크 대상인 하단구조의 id의 할당 보여줘
    })
})