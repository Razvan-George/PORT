// Show
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $(".scroll-up").addClass("show")
        } else {
            $(".scroll-up").removeClass("show");
        }
    });
    // Slider
    $(".scroll-up").click(function () {
        $("html").animate({
            scrollTop: 0
        });
    });
    // Nav
    $(".btn-menu").click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.btn-menu i').toggleClass("active");
    })
});
// Write style
let typed = new Typed(".typing-1", {
    strings: ["Front-End Developer", "Competitive Person"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});