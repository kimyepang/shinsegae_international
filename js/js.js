
$(function(){

  $(".gnb li").mouseenter(function(){
    let i = $(this).index();
    $(".bg").css("opacity", "1");
    $(".sub>li").removeClass("on");
    $(".sub>li").eq(i).addClass("on")
  })

  $(".menu").mouseleave(function(){
    $(".bg").css("opacity", "0");
    $(".sub>li").removeClass("on");

  })
  
})



AOS.init({ offset:200 });