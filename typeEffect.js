var texts = ["網路工程師", "平面設計師", "中原大學學生"];  //陣列
var speed = 1000;                                       //打字速度
var counts = 0;                                         //文字字數
var index = 0;                                          //編號
var id ="type-box";

//測試
//document.getElementById("type-box").innerHTML = texts[0];

//定義
function type() {
    var box = document.getElementById(id);
    box.innerHTML = texts[index];
}

// 當網頁載入完成時執行方法 type
document.addEventListener("DOMContentLoaded", type);