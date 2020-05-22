// Mobile menu toogle
function toogleMobileMenu() {
    var mobileMenu = document.querySelector("#mobile-block-wrap");
    var body = document.querySelector("#body");


    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
        body.style.position = "absolute";
    } else {
        mobileMenu.style.display = "block";
        body.style.position = "fixed";
    }
}


// Mobile Menu Hide on scolling down - show on scrolling up
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("mobile-scroll-menu").style.bottom = "0";
    } else {
        document.getElementById("mobile-scroll-menu").style.bottom = "-100px";
    }

    prevScrollpos = currentScrollPos;
}