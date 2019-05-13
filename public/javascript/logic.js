$(document).ready(function() {
  $(".button").on("click", function() {
    var text = $(".input")
      .val()
      .trim();

    var set = {
      burger_name: text
    };

    $(".ordered").removeClass("ordered-hide");
    $.ajax({
      method: "POST",
      url: "/",
      data: set
    }).then(function(result) {
      console.log(result);
    });
  });
});
