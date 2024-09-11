$(function(){
    $(".class_hover01").hide();
    $(".class_hover02").hide();
$(".class_wrap01").click(function(){

        $(".class_hover01").fadeIn().siblings().fadeOut();
});	
$(".class_wrap02").click(function(){

        $(".class_hover02").fadeIn().siblings().fadeOut();
});	
});

