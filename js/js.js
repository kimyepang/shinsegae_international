
$(function(){
  $(".gnb li").mouseenter(function(){
    let i = $(this).index();
    $(".bg").css("opacity", "1");
    $(".sub>li").removeClass("on");
    $(".sub>li").eq(i).addClass("on")
  });

  $(".menu").mouseleave(function(){
    $(".bg").css("opacity", "0");
    $(".sub>li").removeClass("on");
  });

  $(window).scroll(function(){

    if ($(this).scrollTop() > 67){
      $(".menu").addClass("on");
      $(".menulogo").css("opacity", "1");
    }
    else if($(this).scrollTop() > 990){
      $(".menu").addClass("scroll");
      $(".menu .gnb>li>a").addClass("scroll");
      $(".bg").addClass("scroll");
      $(".sub a").addClass("scroll");
    }
    else{
    $(".menu").removeClass("on");
    $(".menulogo").css("opacity", "0");
    }
  });

 

})



AOS.init({ offset:200 });