// Mobile menu toogle
function toogleMobileMenu() {
    var mobileMenu = document.getElementById("mobile-block-container");


    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
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



// Tablet menu toogle
function toogleTabletMenu() {
    var tabletMenu = document.getElementById("tablet-menu");
    var hamburgerIcon = document.getElementById("hamburger");
    var crossIcon = document.getElementById("cross");


    if (tabletMenu.style.right === "-250px") {
        tabletMenu.style.right = "0";

        hamburgerIcon.style.display = "none";
        crossIcon.style.display = "block";
    }
    
    
    else {
        tabletMenu.style.right = "-250px";

        hamburgerIcon.style.display = "block";
        crossIcon.style.display = "none";
    }
}




