$("img").click(function () {
  const el = $(this);
  const ninjaSrc = el.attr("src");
  const gatoSrc = el.attr("data-gato-src");
  el.attr("src", gatoSrc);
  el.attr("data-gato-src", ninjaSrc);
});
