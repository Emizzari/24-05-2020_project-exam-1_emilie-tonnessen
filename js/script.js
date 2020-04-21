// Mobile menu toogle
function toogleMobileMenu() {
    var mobileMenu = document.getElementById("mobile-block-container");


    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
}

