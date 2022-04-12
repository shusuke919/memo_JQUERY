$("main").fadeIn(1000);

$("#btn_a").on("click",function(){
const memo =$("#text_area").val();
localStorage.setItem("memo",memo);
alert("で行こう");


});e