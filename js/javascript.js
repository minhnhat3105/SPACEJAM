$(window).resize(function () {
  var screen_width = screen.width;
  var zoom_width = window.innerWidth;

  // zoom out
  if (screen_width < zoom_width) {
    $(".ws-container-fluid").css("max-width", "1200px");
  } else if (screen_width == zoom_width) {
    $(".ws-container-fluid").css("max-width", "100%");
  }
});
