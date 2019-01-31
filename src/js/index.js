const ScrollWatch = require("scrollwatch");

const swInstance = new ScrollWatch({
  onElementInView: function(data) {
    console.log(data.el, "...is now in view");
  }
});
