//** ---TOGGLE NAVBAR SHOW/HIDE-- **//
var navBurger = document.getElementById('burger'),
    midNav = document.getElementById('mid-nav');


// INITIAL STATE
if(window.innerWidth < 991) {
    midNav.classList.add("d-sm-none");
}

function WindowResize() {
    if(window.innerWidth < 991) {
        midNav.classList.add("d-sm-none");
    } else {
        midNav.classList.remove("d-sm-none");
    }
}

// BASIC FUNC TO TRIGGER NAV HIDE/SHOW
function BurgerToggle() {
    if(midNav.classList.contains("d-sm-none")) {
        // SHOW
        midNav.classList.remove("d-sm-none");
    } else {
        // HIDE
        midNav.classList.add("d-sm-none");
    }
}

// Event Listeners
window.addEventListener('resize', WindowResize);
navBurger.addEventListener("click", BurgerToggle);

//** ---END TOGGLE NAVBAR SHOW/HIDE-- **//