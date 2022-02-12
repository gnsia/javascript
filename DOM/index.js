// window.onload = function () {
window.addEventListener("load", function () {

    var btnPrint = document.getElementById("btn-print");

    btnPrint.onclick = function () {
        var btnPrint = document.getElementById("btn-print");
        var name = prompt("이름이 뭐에요?",0);
        var age = prompt("나이가 어떻게 되요?", 0);
        var answer = confirm("진짜?");
        if(answer){
            btnPrint.value = name;
            span1.innerText = age;
        } else {
            alert("왜 구라치셈?");
        }
    }
});