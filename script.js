$(document).ready(function() {
  $("#green").click(function() {
    $("body").css("background-color", "green");
  });

  $("#yellow").click(function() {
    $("body").css("background-color", "yellow");
    $("body").addClass("yellow-background");
  });

  $("#red").click(function() {
    $("body").css("background-color", "red");
    $("body").addClass("red-background");
  });
});