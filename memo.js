$("main").fadeIn(1000);

$("#btn_a").on("click",function(){
const memo =$("#text_area").val();
localStorage.setItem("memo",memo);
alert("保存しました");
});

$("#btn_b").on("click",function(){
localStorage.removeItem("memo");
alert("セーブしました")
$("#text_area").val("")
});

if(localStorage.getItem("memo")){
const value = localStorage.getItem("memo");
$("#text_area").val(value);

};