// Ex 2: 버블링을 이용한 사용자 이벤트 처리하기
window.addEventListener("load", function() {
    var section = this.document.querySelector("#section2");
    // var imgs = section.querySelectorAll(".img");
    var imgList = section.querySelector(".img-list");
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = function(e) {
        if(e.target.nodeName != "IMG") return;
        currentImg.src = e.target.src;
    }
    
});

// 연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function () {
    var section = this.document.querySelector("#section1-1");
    var noticeList = section.querySelector(".notice-list");
    noticeList.onclick = function(e) {
        if(e.target.className != "del-button") return;
        var tr = e.target.parentElement.parentElement;
        tr.remove();
    }
});


// Ex 1: 선택된 이미지 보여주기: event target
window.addEventListener("load", function() {
    var section = this.document.querySelector("#section1");
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    for(var i=0; i<imgs.length; i++) {
        imgs[i].onclick = function(e) {
            currentImg.src = e.target.src;
        };
    }
});