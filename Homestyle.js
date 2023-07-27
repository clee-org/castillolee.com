function instance() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    }
    else {
        x.className = "nav";
    }
}
window.onscroll = function() {headerMenu()};

var nav = document.getElementById("navbar");

var sticky = nav.offsetTop;

function headerMenu() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    }
    else {
        nav.clasList.remove("sticky");
    }
}