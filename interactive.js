var state = "developer";

$(function() {
  console.log("ready!");
  if (state === "developer") {
    $("#student").hide();
    $("#person").hide();
    $("#developer").show();
  } else if (state === "student") {
    $("#developer").hide();
    $("#person").hide();
    $("#student").show();
  } else if (state === "person") {
    $("#developer").hide();
    $("#student").hide();
    $("#person").show();
  }
});
