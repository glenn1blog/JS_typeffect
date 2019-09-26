var texts = ["網路工程師", "平面設計師", "中原大學學生"];  //陣列
var speed = 300;                                       //打字速度
var counts = 0;                                         //文字字數
var index = 0;                                          //編號
var id ="type-box";

//測試
//document.getElementById("type-box").innerHTML = texts[0];

//定義
function type() {
    var box = document.getElementById(id);

    // 變數 切割完的文字 = 文字陣列[編號].切割(開始位置，切幾個);
    var slice = texts[index].slice(0, counts++);
    // 盒子.插入內容 = 切割完的文字;
    box.innerHTML = slice;
    // 設定重複時間(方法名稱，間隔時間 (毫秒))
    setTimeout(type, speed);

    if(counts > texts[index].length){
        counts = 0;
        index++;
    }
    if(index == texts.length) {
        index = 0;
    }
}

// 當網頁載入完成時執行方法 type
document.addEventListener("DOMContentLoaded", type);