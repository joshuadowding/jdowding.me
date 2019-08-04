$(document).ready(function () {
  $("#theme-toggle #dark").hide();
  $("#menu-toggle #close").hide();

  $("#theme-toggle").click(function () {
    if ($("#theme-toggle #dark").is(":hidden")) {
      $(":root").addClass("theme-dark");

      $("#theme-toggle #dark").show();
      $("#theme-toggle #light").hide();
    }
    else {
      $(":root").removeClass("theme-dark");

      $("#theme-toggle #dark").hide();
      $("#theme-toggle #light").show();
    }
  });

  $(".menu-toggle").click(function () {
    if ($(".menu-toggle #close").is(":hidden")) {
      $(".sidenav").css("width", "256px");
      $("#main").css("margin-right", "256px");

      $(".menu-toggle #close").show();
      $(".menu-toggle #open").hide();
    }
    else {
      $(".sidenav").css("width", "0");
      $("#main").css("margin-right", "0");

      $(".menu-toggle #close").hide();
      $(".menu-toggle #open").show();
    }
  });

  detect_theme_preference();
});

function toggle_theme() {
  var _currentTime = new Date();
  if (_currentTime.getHours() >= 19 || _currentTime.getHours <= 6) {
    $(":root").addClass("theme-dark");

    $("#theme-toggle #dark").show();
    $("#theme-toggle #light").hide();
  }
}

/*
  Credit: https://medium.com/@jonas_duri/enable-dark-mode-with-css-variables-and-javascript-today-66cedd3d7845
*/
function detect_theme_preference() {
  var isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var isLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  var isImpartial = window.matchMedia("(prefers-color-scheme: no-preference)").matches;
  var isNotSupported = !isDark && !isLight && !isImpartial;

  if (!isNotSupported) {
    if (isDark) {
      $(":root").addClass("theme-dark");

      $("#theme-toggle #dark").show();
      $("#theme-toggle #light").hide();
    }
    else if (isLight) {
      $(":root").removeClass("theme-dark");

      $("#theme-toggle #dark").hide();
      $("#theme-toggle #light").show();
    }
    else if (isImpartial) {
      toggle_theme();
    }
    else { // catch-all:
      toggle_theme();
    }
  }
}
