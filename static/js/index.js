$(function () {

  $(".next").mouseenter(function () {
    $(".next img").attr("src", "./static/image/29.svg")
  })

  $(".next").mouseleave(function () {
    $(".next img").attr("src", "./static/image/300.svg")
  })


  $(".prev").mouseenter(function () {
    $(".prev img").attr("src", "./static/image/299.svg")
  })

  $(".prev").mouseleave(function () {
    $(".prev img").attr("src", "./static/image/30.svg")
  })

  $(".next-two").mouseenter(function () {
    $(".next-two img").attr("src", "./static/image/29.svg")
  })

  $(".next-two").mouseleave(function () {
    $(".next-two img").attr("src", "./static/image/300.svg")
  })

  $(".prev-two").mouseenter(function () {
    $(".prev-two img").attr("src", "./static/image/299.svg")
  })

  $(".prev-two").mouseleave(function () {
    $(".prev-two img").attr("src", "./static/image/30.svg")
  })
  $(".clickspan").click(function () {
    $(".clickspan").removeClass("hoverspan")
    $(this).addClass("hoverspan")
  })

  $(".micro-noactive").click(function () {
    $(".micro-noactive").removeClass("micro-active")
    $(this).addClass("micro-active")
  })
  $(".micro-noactive").eq(0).click(function () {
    $(".pinglun").css('display', "block")
    $(".micro-video-right-bottom").css('display', "none")
  })

  $(".micro-noactive").eq(1).click(function () {
    $(".pinglun").css('display', "none")
    $(".micro-video-right-bottom").css('display', "block")
  })

  var navHeight
  var position
  var subnavHeiht
  var timer
  $("#nav li").mouseenter(function () {
    clearTimeout(timer)
    $("#nav li").children("a").children("span").css("color","black")
    $(this).children("a").children("span").css("color","#3dbdb6")
    $("#nav li").children(".subnav").hide()
    $(this).children(".subnav").show()
     navHeight = $("#nav").outerHeight()
    position = $(this).position()
    subnavHeiht = $(this).children(".subnav").height()
    if (subnavHeiht + position.top < navHeight) {
      $(this).children(".subnav").css("top", position.top)
    } else {
      $(this).children(".subnav").css("bottom", "0")
    }
  })

  $("#nav li").mouseleave(function(){
   var _this=this
  timer = setTimeout(function(){
  $(_this).children(".subnav").hide()
  $(_this).children("a").children("span").css("color","black")
 },1000)
  })
$(".subnav").mouseenter(function(){
  clearTimeout(timer)
})
$(".subnav").mouseleave(function(){
$(this).hide()
})
})