// Ex:9 다중 노드 선택 방법과 일괄삭제, 노드의 자리 바꾸기
window.addEventListener("load", function () {
    var section = this.document.querySelector("#section9");
    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".all-check");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");
    
    var currentNode = tbodyNode.firstElementChild;

    allCheckbox.onchange = function() {
        var inputs = tbodyNode.querySelectorAll("input[type='checkbox']");
        for(var i=0; i<inputs.length; i++ ) {
            inputs[i].checked=allCheckbox.checked;
        }
    }

    delButton.onclick = function() {
        var inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked");
        console.log(inputs.length);
        for(var i=0; i<inputs.length; i++) {
            inputs[i].parentElement.parentElement.remove();
        }
    };

    swapButton.onclick = function() {
        
    };

});

// Ex:8 노드 삽입과 순서 바꾸기
window.addEventListener("load", function () {
    var section = this.document.querySelector("#section8");
    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");
    
    var currentNode = tbodyNode.firstElementChild;

    downButton.onclick = function() {
        var nextNode = currentNode.nextElementSibling;
        if(nextNode == null) {
            alert("더 이상 이동 할 수 없습니다.");
            return;
        }
        // tbodyNode.removeChild(nextNode);
        // tbodyNode.insertBefore(nextNode, currentNode); //arg2 = 기준이 될 노드
        currentNode.insertAdjacentElement("beforebegin", nextNode);
    };

    upButton.onclick = function() {
        var prevNode = currentNode.previousElementSibling;
        if(prevNode == null) {
            alert("더 이상 이동 할 수 없습니다.");
            return;
        }
        // tbodyNode.removeChild(currentNode);
        // tbodyNode.insertBefore(currentNode, prevNode);
        currentNode.insertAdjacentElement("afterend", prevNode);
    };

});

// Ex:7 노드 복제와 템플릿 태그
window.addEventListener("load", function () {

    var notices = [
        {id:5, title:"잡아 슥흐릳흐?", regDate:"2022-02-13", writerId:"gnsia", hit:"100"},
        {id:6, title:"잠바 스크래치?", regDate:"2022-02-13", writerId:"gnsia", hit:"1000"},
    ]

    var section = this.document.querySelector("#section7");
    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");
    
    cloneButton.onclick = function() {
        var trNode = tbodyNode.querySelector("tr");
        var cloneNode = trNode.cloneNode(true);
        var tds = cloneNode.querySelectorAll("td");

        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = '<a href="">' + notices[0].title + '</a>';
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;

        tbodyNode.appendChild(cloneNode);
    };

    templateButton.onclick = function() {
        var template = section.querySelector("template");
        for(var i=0; i<notices.length; i++) {
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].textContent = notices[i].id;
            var aNode = tds[1].children[0];
            aNode.href = notices[i].id;
            aNode.textContent = notices[i].title;
            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;
            tbodyNode.appendChild(cloneNode);
        }
    };

});


// Ex:6 노드 조작: 메뉴 추가 (CreateTextNode, Element
window.addEventListener("load", function () {
    var section6 = this.document.querySelector("#section6");
    var titleInput = section6.querySelector(".title-input");
    var menuListUl = section6.querySelector(".menu-list");
    var addButton = section6.querySelector(".add-button");
    var delButton = section6.querySelector(".del-button");

    addButton.onclick = function () {

        var title = titleInput.value;

        var html = '<a href="">'+title+'</a>';
        var li = document.createElement("li");
        li.innerHTML = html;
        // menuListUl.appendChild(li);
        menuListUl.append(li);

        // var title = titleInput.value;
        // var txtNode = document.createTextNode(title);
        // menuListDiv.appendChild(txtNode);

        // var title = titleInput.value;
        // var txtNode = document.createTextNode(title);
        // var aNode = document.createElement("a");
        // aNode.href="";
        // aNode.appendChild(txtNode);

        // var liNode = document.createElement("li");
        // liNode.appendChild(aNode);

        // menuListUl.appendChild(liNode)
    };

    delButton.onclick = function () {
        // var txtNode = menuListDiv.childNodes[0];
        var liNode = menuListUl.children[0];
        // menuListUl.removeChild(liNode);
        liNode.remove();
    };
});

// Ex:5 Element node 속성 & CSS 속성
window.addEventListener("load", function () {
    var section5 = this.document.querySelector("#section5");
    var imgSelect = section5.querySelector("#img-select");
    var changeButton = section5.querySelector(".change-button");
    var colorInput = section5.querySelector(".color-input");
    var img = section5.querySelector(".image");
    var imgPath = "../images/";
    
    changeButton.onclick = function () {
        img.src = imgPath + imgSelect.value;
        img.style.borderWidth = "5px";
        img.style.borderStyle = "inset";
        img.style.borderColor = colorInput.value;
    };
});

// Ex:4 childNodes를 이용한 노드 선택
window.addEventListener("load", function () {
    var section4 = this.document.querySelector("#section4");
    var box = this.document.querySelector(".box");
    var input1 = box.children[0];
    var input2 = box.children[1];
    
    input1.value="hello";
    input2.value="okay";
});

// Ex:3 Selecors API Level1
window.addEventListener("load", function () {
    var section3 = this.document.getElementById("section3");
    var txtX = section3.querySelector(".txt-x");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtResult = section3.querySelector(".txt-result");
    
    btnAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtResult.value = x+y;
    };
});

// Ex2
window.addEventListener("load", function () {
    var section2 = this.document.getElementById("section2");
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtResult = section2.getElementsByClassName("txt-result")[0];
    
    btnAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtResult.value = x+y;
    };
});

// Ex1
window.addEventListener("load", function () {
    var txtX = this.document.getElementById("txt-x");
    var txtY = this.document.getElementById("txt-y");
    var btnAdd = this.document.getElementById("btn-add");
    var txtResult = this.document.getElementById("txt-result");

    btnAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtResult.value = x+y;
    };
});