// image carousel
const nextArrow = document.querySelector(".next");
const previousArrow = document.querySelector(".previous");
const allImages = document.querySelectorAll(".image");

nextArrow.addEventListener("click", () => {
    allImages[allImages.length - 1].innerHTML = allImages[0].innerHTML;
    for (i = 0; i < allImages.length; i = i + 1) {
        if (i < allImages.length - 1) {
            allImages[i].innerHTML = allImages[i + 1].innerHTML;
        }
    }
  });

previousArrow.addEventListener("click", () => {
    allImages[allImages.length-1].innerHTML = allImages[0].innerHTML;
    for (i = (allImages.length - 1); i >= 0; i = i - 1) {
        if (i === 0) {
            allImages[0].innerHTML = allImages[allImages.length - 1].innerHTML;
        } else if (i > 0) {
            allImages[i].innerHTML = allImages[i-1].innerHTML;
        }
    }
});