// hamburger menu
$(".hamburger").on("click", function () {
    if ($(".navLinks").css("display") == "none") {
        $(".navLinks").css({display: "block"});
    } else if ($(".navLinks").css("display") == "block") {
        $(".navLinks").css({display: "none"});
    }
});

const mediaQuery = window.matchMedia('(max-width: 768px)');

const displayNav = () => {
    if (mediaQuery.matches) {
        $(".navLinks").css({display: "none"});
    } else {
        $(".navLinks").css({display: "block"});
    }
}

window.addEventListener('resize', displayNav);

// image carousel
const nextArrow = document.querySelector(".next");
const previousArrow = document.querySelector(".previous");
const carousel = document.querySelector(".imgCarousel");
const allImages = document.querySelectorAll(".image");
let img1 = `<img src="./assets/gallery-image1.jpg" alt="house on the beach at sunset"></img>`
let img2 = `<img src="./assets/gallery-image2.jpg" alt="walkway to a beach house">`
let img3 = `<img src="./assets/gallery-image3.jpg" alt="house on the beach between palm trees"></img>`
let counter = 0;
const changeImage = () => {
    console.log("test")
}
nextArrow.addEventListener("click", () => {
    allImages[allImages.length - 1].innerHTML = allImages[0].innerHTML;

    for (i = 0; i < allImages.length; i = i + 1) {
        if (i < allImages.length - 1) {
            allImages[i].innerHTML = allImages[i + 1].innerHTML;
        } // else if (i === allImages.length - 1) {
        //     console.log('else if statement');
        // }
    }
  });

previousArrow.addEventListener("click", () => {
    console.log("left");
    allImages[allImages.length-1].innerHTML = allImages[allImages.length - 2].innerHTML;
    for (i = 0; i < allImages.length; i = i + 1) {
        if (i < allImages.length - 1) {
            allImages[i + 1].innerHTML = allImages[i].innerHTML;
        }
    }
})