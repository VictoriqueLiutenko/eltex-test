const $ = require("jquery");
window.jQuery = $;

$(document).ready(function() {
  const icon = $(".header-hamburger");
  const menu = $(".header-navigation");

  icon.click(function() {
    $(this).toggleClass("open");
    $(menu).toggleClass("header-navigation--open");
  });
});
