// 연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function () {
    var section = this.document.querySelector("#section1-1");
    var delButtons = section.querySelectorAll(".del-button");
    for(var i=0; i<delButtons.length; i++) {
        delButtons[i].onclick = function(e) {
            var currentTr = e.target.parentElement.parentElement;
            currentTr.remove();
        };
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