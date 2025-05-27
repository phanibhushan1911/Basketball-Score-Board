let homeDisplay = document.getElementById("home-display");
let guestDisplay = document.getElementById("guest-display");
let homeCount = 0;
let guestCount = 0;

function homeOne() {
    homeCount += 1;
    homeDisplay.innerText = homeCount;
}

function homeTwo() {
    homeCount += 2;
    homeDisplay.innerText = homeCount;
}

function homeThree() {
    homeCount += 3;
    homeDisplay.innerText = homeCount;
} 

function guestOne() {
    guestCount += 1;
    guestDisplay.innerText = guestCount;
}

function guestTwo() {
    guestCount += 2;
    guestDisplay.innerText = guestCount;
}

function guestThree() {
    guestCount += 3;
    guestDisplay.innerText = guestCount;
}