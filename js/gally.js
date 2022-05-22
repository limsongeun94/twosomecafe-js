$(function() { 
    var list_zone = document.getElementById("inner_list_pc")
    var list_a = list_zone.getElementsByTagName("a")
    for(var i=0; i < list_a.length; i++) {
        list_a[i].onclick = function() {
            var ph = document.getElementById("photo_pc").children[0]
            ph.src = this.href
            return false
        }
    }

    var list_zone_mb = document.getElementById("inner_list_mb")
    var list_a_mb = list_zone_mb.getElementsByTagName("a")
    for(var i=0; i < list_a_mb.length; i++) {
        list_a_mb[i].onclick = function() {
            var ph = document.getElementById("photo_mb").children[0]
            ph.src = this.href
            return false
        }
    }
})

// js, css 모두 id, class로 셀렉트하는게 가능하긴 한데
// 가급적이면 js에서 셀렉트해서 사용(어떤 동작을 시키고 싶다)할 때는 id를 주고
// css로 스타일을 주고 싶은거면 class를 사용하면 좋아!

// 일단 위에서 사용하는 inner_list라는 id값이 두번 중복되어 있는데... 별로 좋은건 아니야.
// id가 photo인것도 중복으로 있어서 위에 PC꺼가 셀렉트 되고 있네..
// id는 중복사용하면 안되는구나......
// 응! identifier의 약자이구 한글로 "식별자" 라는 뜻이야. 그래서 해당 요소를 유일하게 식별할 수 있는 값이어야 해.
// 네이버에 같은 아이디로 두번가입 못하잖아 ㅌㅋ 그징... 고마워고마워!!!