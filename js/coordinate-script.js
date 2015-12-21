(function() {
    "use strict";
    var x1 = -3,
        y1 = -2;
    var x2 = prompt("Please, enter coordinate x", 0);
    var y2 = prompt("Please, enter coordinate y", 0);
    var distance = Math.sqrt((Math.pow((x1 - x2), 2)) + (Math.pow((y1 - y2), 2)));
    var sentenceDistance = "The distance between points A(" + x1 + "," + y1 + ") and B(" + x2 + "," + y2 + ") is " + distance;
    alert(sentenceDistance);
})();