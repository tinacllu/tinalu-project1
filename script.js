$(".hamburger").on("click", function () {
    if ($(".navLinks").css("display") == "none") {
        $(".navLinks").css({display: "block"});
    } else if ($(".navLinks").css("display") == "block") {
        $(".navLinks").css({display: "none"});
    }
});

let mediaQuery = window.matchMedia('(max-width: 768px)');

const displayNav = () => {
    if (mediaQuery.matches) {
        $(".navLinks").css({display: "none"});
    } else {
        $(".navLinks").css({display: "block"});
    }
}

window.addEventListener('resize', displayNav);