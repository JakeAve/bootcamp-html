const imgs = $("img");

imgs.click(function () {
  $(this).hide();
});

$("#reset-btn").click(function () {
  imgs.show();
});
