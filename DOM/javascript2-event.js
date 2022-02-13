// Ex 4: 서로 다른 기능의 여러 버튼을 가진 화면에서 이벤트를 처리하는 방법
window.addEventListener("load", function () {
    var section = this.document.querySelector("#section4");
    var tBody = section.querySelector(".notice-list tbody");
    tBody.onclick = function(e) {
        var target = e.target;
    
        if(target.nodeName != "INPUT") return;
    
        if(target.classList.contains("sel-button")) {
            var tr = target.parentElement;
            for(; tr.nodeName != "TR"; tr=tr.parentElement);
            tr.style.background = "yellow";
        }
        else if(target.classList.contains("edit-button")) {

        }
        else if(target.classList.contains("del-button")) {

        }
    }
});


// Ex 3: 이벤트 버블링 멈추기
window.addEventListener("load", function() {
    var section = this.document.querySelector("#section3");
    var imgList = section.querySelector(".img-list");
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = function(e) {
        console.log("imgList.onclick");
        if(e.target.nodeName != "IMG") return;
        currentImg.src = e.target.src;
    }

    addButton.onclick = function(e) {
        e.stopPropagation();
        console.log("addButton.onclick");
        var img = document.createElement("img");
        img.src = "../images/surf1.jpg"
        currentImg.insertAdjacentElement("afterend", img);
    }

});

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