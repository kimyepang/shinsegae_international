let menu = document.querySelectorAll(".menu ul li")
let sub = document.querySelectorAll(".sub>li")

function my(){
  menu.forEach(function(v,k){
    v.onmouseleave = function(){
      sub[k].classList.remove("on");
    }
  })
}

menu.forEach(function(v,k){
  my();
  v.onmouseenter = function(){
    sub[k].classList.add("on");
  }
})

AOS.init({ offset:200 });