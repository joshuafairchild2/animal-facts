$(function() {
  $("input[name=animals-button]:radio").click(function() {

    if ($("input[name=animals-button]:checked").val() == "Turtles") {
      alert("turtles");
  }

  });
});
