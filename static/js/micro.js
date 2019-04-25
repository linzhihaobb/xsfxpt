$(function () {
  $(".tabClick").click(function () {
    $(".tabClick").removeClass("tabBg")
    $(this).addClass('tabBg')
  })
  $(".tabClick").eq(3).click(function () {
    $(".course-page").show()
  })
  $(".tabClick").eq(0).click(function () {
    $(".course-page").hide()
  })
  $(".tabClick").eq(1).click(function () {
    $(".course-page").hide()
  })
  $(".tabClick").eq(2).click(function () {
    $(".course-page").hide()
  })
  $(".tabClick").eq(4).click(function () {
    $(".course-page").hide()
  })
  $(".leftHover").mouseenter(function () {
    $(this).children().children().attr("src", "./static/image/490.svg")
  })
  $(".leftHover").mouseleave(function () {
    $(this).children().children().attr("src", "./static/image/48.svg")
  })
  $(".rightHover").mouseenter(function () {
    $(this).children().children().attr("src", "./static/image/49.svg")
  })
  $(".rightHover").mouseleave(function () {
    $(this).children().children().attr("src", "./static/image/480.svg")
  })
  $(".tab-3-Active").click(function(){
    $(".tab-3-Active").css({"color":"#000000","background":"#FFFFFF"})
    $(".tab-3-Active").children().css("background","#3CBAB3")
    $(this).css({"color":"#FFFFFF","background":"#3CBAB3"})
    $(this).children().css("background","#FFFFFF")
  })
  $(".tab-4-Active").click(function(){
    $(".tab-4-Active").css({"color":"#000000","background":"#FFFFFF"})
    $(".tab-4-Active").children().css("background","#3CBAB3")
    $(this).css({"color":"#FFFFFF","background":"#3CBAB3"})
    $(this).children().css("background","#FFFFFF")
  })
  $(".tab-5-Active").click(function(){
    $(".tab-5-Active").css({"color":"#000000","background":"#FFFFFF"})
    $(".tab-5-Active").children().css("background","#3CBAB3")
    $(this).css({"color":"#FFFFFF","background":"#3CBAB3"})
    $(this).children().css("background","#FFFFFF")
  })
  // $(".clickSpan").click(function(){
  //   $(this).siblings(".clickSpan").removeClass("chooseSpan")
  //   $(this).addClass("chooseSpan")
  // })
  // $(".clickRadio").click(function(){
  //   $(this).siblings(".clickRadio").removeClass("clickRadioBg")
  //   $(this).addClass("clickRadioBg")
  // })

  $(".nianjichoose").click(function(){
    $(this).siblings(".nianjichoose").removeClass("nianjiActive")
    $(this).addClass("nianjiActive")
  })
  $(".microXueDuan").click(function(){
    $(this).siblings('.microXueDuan').removeClass("microActive")
    $(this).addClass("microActive")
  })
  $(".microKeMu").click(function(){
    $(this).siblings('.microKeMu').removeClass("microKeMuActive")
    $(this).addClass("microKeMuActive")
  })
});