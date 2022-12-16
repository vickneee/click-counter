var numOfClicks = 0;

$(document).ready(function () {
  $("#click-button").on("click", function () {
    numOfClicks += 3;
    document.getElementById("click-counter").innerHTML = numOfClicks;
  });
});
