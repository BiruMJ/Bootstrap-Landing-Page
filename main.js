$(document).ready(function () {
    $('.header').height($(window).height());

})

$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 50)
})

// Page Redirect Button:

const topBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    // Check if user has scrolled down more than 300px
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// Scroll smoothly to the absolute top
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});