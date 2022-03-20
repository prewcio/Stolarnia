const HamburgerMenu = document.querySelector(".hamburger-menu");
const NavMenu = document.querySelector(".nav-menu");

HamburgerMenu.addEventListener("click", MenuMobile);

function MenuMobile() {
    HamburgerMenu.classList.toggle("active");
    NavMenu.classList.toggle("active");
}


const CloseLink = document.querySelectorAll(".close-link");

CloseLink.forEach(n => n.addEventListener("click", CloseMenu));

function CloseMenu() {
    HamburgerMenu.classList.remove("active");
    NavMenu.classList.remove("active");
}


var menu = $('.nav-menu');
if (menu.length) {
    let links = menu.find('a');
    $(links).each(function (index) {
        if (this.href == window.location.href) {
            console.log(index);
            $(links[index]).addClass('active');
        }
    })
}

var btntop = document.getElementById("btn-top");
var btntoplbl = document.getElementById("btn-top-lbl");
window.onscroll = function () {
    scrollFunction();
};

$(document).ready(function () {
    btntop.style.display = "block";
    btntop.style.visibility = "hidden";
    btntop.style.opacity = "0";
    btntoplbl.style.display = "block";
    btntoplbl.style.visibility = "hidden";
    btntoplbl.style.opacity = "0";

})

$('#btn-top').click(function () {
    topFunction();
});
$('#btn-top-arrow').click(function () {
    topFunction();
});

function scrollFunction() {
    if (window.scrollY) {
        btntop.style.visibility = "visible";
        btntop.style.opacity = "1";
        btntoplbl.style.visibility = "visible";
        btntoplbl.style.opacity = "1";
    } else {
        btntoplbl.style.opacity = "0";
        btntop.style.opacity = "0";
        setTimeout(function () {
            btntop.style.visibility = "hidden";
            btntoplbl.style.visibility = "hidden";
        }, 500)
    }
}


function topFunction() {
    window.scrollTo(0, 0);
}

$(document).ready(function () {
    var hash = $(location).prop('hash');
    if (hash) {
        window.scrollTo(0, 1);
        window.scrollTo(0, 0);
        var elem = document.getElementById(hash.substr(1));
        setTimeout(() => {
            window.scrollTo($(hash).offset().left, $(hash).offset().top);
        }, 3000)
    }
})

var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-mode");
};