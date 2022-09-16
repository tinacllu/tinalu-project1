$(".hamburger").on("click", function () {
    if ($(".navLinks").css("display") == "none") {
        $(".navLinks").css({display: "block"});
    } else if ($(".navLinks").css("display") == "block") {
        $(".navLinks").css({display: "none"});
    }
});

// if //windowsize max-width: 768
// $(".navLinks").css({display: "block"});