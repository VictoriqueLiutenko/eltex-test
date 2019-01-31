const $ = require("jquery");
window.jQuery = $;
require("./jquery.animate-colors-min");

$(document).ready(function() {
  const slick = require("slick-carousel");
  const $screen = $(".iphoneSlider-slider");
  const $prevArrow = document.getElementById("js-prevArrow");
  const $nextArrow = document.getElementById("js-nextArrow");
  const $background = $(".iphoneSlider");
  const colors = ["#26e6d6", "#26d6e6", "#26e6e6"];
  let i = 0;

  $screen.slick({
    fade: true,
    speed: 0,
    arrows: true,
    prevArrow: $($prevArrow),
    nextArrow: $($nextArrow),
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $(".iphoneSlider-slider").on("beforeChange", function() {
    $background.animate({ backgroundColor: colors[i] }, "fast");
    i++;
    if (i >= colors.length) {
      i = 0;
    }
  });
});
