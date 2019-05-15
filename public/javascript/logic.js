$(document).ready(function() {
  $(".button").on("click", function() {
    var text = $(".input")
      .val()
      .trim();

    var set = {
      burger_name: text
    };
    $.ajax({
      method: "POST",
      url: "/",
      data: set
    }).then(function() {
      location.reload();
    });
  });

  $(".devour").on("click", function() {
    var id = $(this).attr("devour_id");

    $.ajax({
      method: "PUT",
      url: "/burger/" + id
    }).then(function() {
      location.reload();
    });
  });
});
