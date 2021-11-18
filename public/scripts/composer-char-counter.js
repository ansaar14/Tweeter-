$(document).ready(function () {
  $("textarea").keyup(function () {
    // console.log(this);

    let value = $(this).val();
    let maxlength = $(this).data("maxlength");

    let total = maxlength - value.length;
    console.log(total);

    if (total >= 0) {
      $(".counter").removeClass("error");
    } else if (total < 0) {
      $(".counter").addClass("error");
    }
    $(".counter span").text(total);
  });
});
