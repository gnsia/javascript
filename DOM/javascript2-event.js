// Ex 9: 박스의 옵셋 영역 좌표 이용하기
window.addEventListener("load", function () {
    var section = this.document.querySelector("#section9");
    var container = section.querySelector(".container");
    var status = section.querySelector(".status");
    var dragging = false;
    var offset = {x:0, y:0};            // 박스의 옵셋을 담을 객체
    var current = null;
    var left = container.offsetLeft;    // 페이지 안에 컨테이너가 갖는 x값
    var top = container.offsetTop;      // 페이지 안에 컨테이너가 갖는 y값

    console.log(left);
    console.log(top);

    container.onmousedown = function(e) {
        if(e.target.classList.contains("box")) {
            dragging = true;
            current = e.target;
            offset.x = e.offsetX; 
            offset.y = e.offsetY;
        }
    };

    container.onmousemove = function(e) {
        if(!dragging) return;
        // 현재 페이지 상에서의 x값 - 박스를 클릭한 지점에서의 x값 - 페이지 상에서 컨테이너의 x값 
        var x = e.pageX-offset.x-left;

        // 현재 페이지 상에서의 y값 - 박스를 클릭한 지점에서의 y값 - 페이지 상에서 컨테이너의 y값 
        var y =e.pageY-offset.y-top;

        current.style.left = x+"px";
        current.style.top = y+"px";

        status.innerText = "(x, y):("+x+","+y+")";
    };

    container.onmouseup = function(e) {
        dragging = false;
    };
});

// Ex 8: 드래그로 박스 옮기기
window.addEventListener("load", function () {
    var section = this.document.querySelector("#section8");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;

    container.onmousedown = function(e) {
        if(e.target.classList.contains("box")) {
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };

    container.onmousemove = function(e) {
        if(!dragging) return;
        current.style.left = e.pageX-offset.x+"px";
        current.style.top = e.pageY-offset.y+"px";
    };

    container.onmouseup = function(e) {
        dragging = false;
    };
});


// Ex 7: 드래그로 박스 옮기기
window.addEventListener("load", function () {
    var section = this.document.querySelector("#section7");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0, y:0};

    container.onmousedown = function(e) {
        if(e.target === box) dragging = true;
    };

    container.onmousemove = function(e) {
        if(!dragging) return;
        box.style.left = e.pageX-offset.x+"px";
        box.style.top = e.pageY-offset.y+"px";
    };

    container.onmouseup = function(e) {
        dragging = false;
    };

    box.onmousedown = function(e) {
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    };
});

// Ex 6: 클릭 위치로 박스 옮기기
window.addEventListener("load", function () {
    var section = this.document.querySelector("#section6");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    
    container.onclick = function(e) {
        //e.x, e.y / e.offsetX, e.offsetY/ e.clientX, e.pageX ....
        console.log("(x, y):", +e.x+","+e.y);                       // 현재 보여지는 화면상에서의 좌표
        console.log("client (x, y):", +e.clientX+","+e.clientY);    // 현재 보여지는 화면상에서의 좌표
        console.log("page (x, y):", +e.pageX+","+e.pageY);          // 해당 페이지 상에서의 좌표
        console.log("offset (x, y):", +e.offsetX+","+e.offsetY);    // 클릭한 오브젝트의 (0, 0)에서부터 시작하는 좌표
        box.style.position = "absolute";
        box.style.left = e.pageX+"px";
        box.style.top = e.pageY+"px";

    };
});

// Ex 5: 트리거
window.addEventListener("load", function () {
    var section = this.document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");
    
    fileTriggerButton.onclick = function() {
        var event = new MouseEvent("click", {
            'view':window,
            'bubbles':true,
            'cancelable':true
        });
        fileButton.dispatchEvent(event)
    }
});

// Ex 4: 서로 다른 기능의 여러 버튼을 가진 화면에서 이벤트를 처리하는 방법
window.addEventListener("load", function () {
    var section = this.document.querySelector("#section4");
    var tBody = section.querySelector(".notice-list tbody");
    tBody.onclick = function(e) {

        e.preventDefault(); // 기본 행위 못하게 하는 설정

        var target = e.target;
    
        if(target.nodeName != "A") return;
    
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