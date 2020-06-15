var showImage = document.querySelector(".example__image-wrapper");
var imageBefore = showImage.querySelector(".example__image--before");
var imageAfter = showImage.querySelector(".example__image--after");

var mobileDemo = document.querySelector(".mobile-demo");
var buttonBefore = mobileDemo.querySelector(".mobile-demo__button--before");
var buttonAfter = mobileDemo.querySelector(".mobile-demo__button--after");

buttonBefore.addEventListener("click", function(evt) {
  // evt.preventDefault();
  imageBefore.classList.add("show-demo");
  imageAfter.classList.remove("show-demo");
});

buttonAfter.addEventListener("click", function(evt) {
  // evt.preventDefault();
  imageAfter.classList.add("show-demo");
  imageBefore.classList.remove("show-demo");
});
