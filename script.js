function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

var isVisible = false;
$("#btnscrollToTop").click(function () {
  $(window).scrollTop(0);
});
$(window).scroll(function () {
  var shouldBeVisible = $(window).scrollTop() > 500;
  if (shouldBeVisible && !isVisible) {
    isVisible = true;
    $("#btnscrollToTop").show();
  } else if (isVisible && !shouldBeVisible) {
    isVisible = false;
    $("#btnscrollToTop").hide();
  }
});
