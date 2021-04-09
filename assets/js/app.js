$(function () {
  AOS.init();

  $(".scroll-down").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section--services").offset().top },
      "fast"
    );
    return false;
  });

  var lastScroll = 0;
  var header = $(".header").outerHeight();
  $(window).scroll(function () {
    if ($(window).scrollTop() >= header) {
      $("#header").addClass("sticky");
      var head = $(".navbar").outerHeight();
      document.documentElement.style.setProperty("--headerWidth", head + "px");
    } else {
      $("#header").removeClass("sticky");
      document.documentElement.style.setProperty(
        "--headerWidth",
        header + "px"
      );
    }
  });
function calcLocationHeight(){
  if((".location-info").length>0) {
    var locationHeight = $(".location-info").outerHeight();
    $('.app-footer').css("--paddingTop", locationHeight+'px');
    console.log(locationHeight);
  }
}
calcLocationHeight();

$(window).on("resize", function(){
  calcLocationHeight();
})


  AOS.refresh();
});
