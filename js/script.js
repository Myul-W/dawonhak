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

$(function(){
        $(".class_wrap p").hide();
    $(".class_wrap01").click(function(){
            $(".p1").fadeIn().siblings();
    });	
    $(".class_wrap02").click(function(){
        $(".p2").fadeIn().siblings();
});	
   
    });

