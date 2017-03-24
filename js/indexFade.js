// $("#container p").fadeOut(function() {
//   $(this).text("At present, I am heavily invested in building a new career as a web designer. My current focus is front-end web design.")
// }).fadeIn();

// $(".statement").velocity({ opacity: 1, top: "50%" }).velocity({ opacity: 0, top: "-50%" }, { delay: 1000 });

$(function () {
  var lastScroll;
  $(window).scroll(function () {
    lastScroll = window.scrollY;
    $('#disappearText').css({
      'transform' : 'translate3d(0,' + lastScroll/2 + 'px,0)',
      'opacity' : (100 - lastScroll/4)/100
    });
  });
});
