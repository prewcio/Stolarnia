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
if(menu.length) {
    let links = menu.find('a');
    $(links).each(function (index) {
        if(this.href == window.location.href){
            console.log(index);
            $(links[index]).addClass('active');
        }
    })
}
