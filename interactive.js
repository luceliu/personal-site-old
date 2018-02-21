var state;
$(function() {
  console.log("ready!");
  state = "developer";
  updateText();
});

$(".dropdown-item").click(handleClick);

function handleClick() {
  var id = $(this).attr("id");
  if (id === "developer-btn") {
    state = "developer";
  } else if (id === "student-btn") {
    state = "student";
  } else if (id === "person-btn") {
    state = "person";
  }
  updateText();
}

function updateText() {
  if (state === "developer") {
    $("#student").addClass("hidden");
    $("#person").addClass("hidden");
    $("#developer").removeClass("hidden");
    $("#dropdownMenuButton").text("developer");
  } else if (state === "student") {
    $("#developer").addClass("hidden");
    $("#person").addClass("hidden");
    $("#student").removeClass("hidden");
    $("#dropdownMenuButton").text("student");
  } else if (state === "person") {
    $("#developer").addClass("hidden");
    $("#student").addClass("hidden");
    $("#person").removeClass("hidden");
    $("#dropdownMenuButton").text("person");
  }
}
