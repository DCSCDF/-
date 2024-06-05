/* //页面加载完成之后隐藏loading
$(window).load(function () {
  $(".loaderbg").hide();
}); */

//设置页面加载3秒之后隐藏loading
$(function () {
  setTimeout(function () {
    $(".loaderbg").hide();
    /*  alert("页面加载完成啦！"); */
  }, 1000);
})

$(function () {
  function footerPosition() {
    $("footer").removeClass("fixed-bottom");
    var contentHeight = document.body.scrollHeight,//网页正文全文高度
      winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
    if (!(contentHeight > winHeight)) {
      //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
      $("footer").addClass("fixed-bottom");
    }
  }
  footerPosition();
  $(window).resize(footerPosition);
});