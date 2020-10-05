let slides = document.querySelectorAll('.slide');

let currentSlide = 0;

let interval = setInterval(nextSlide, 5000);

function nextSlide() {
    slides[currentSlide].setAttribute('class', 'slide');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].setAttribute('class', 'slide active');
}

let slideTwo = document.querySelectorAll('.slide1');

let secondCurrentSlide = 0;

let interval1 = setInterval(secondSlide, 5000);

function secondSlide() {
    slideTwo[secondCurrentSlide].setAttribute('class', 'slide1');
    secondCurrentSlide = (secondCurrentSlide + 1) % slideTwo.length;
    slideTwo[secondCurrentSlide].setAttribute('class', 'slide1 active');
}

let slideThree = document.querySelectorAll('.slide2');

let thirdCurrentSlide = 0;

let interval2 = setInterval(thirdSlide, 5000);

function thirdSlide() {
    slideThree[thirdCurrentSlide].setAttribute('class', 'slide2');
    thirdCurrentSlide = (thirdCurrentSlide + 1) % slideThree.length;
    slideThree[thirdCurrentSlide].setAttribute('class', 'slide2 active');
}

let slideFour = document.querySelectorAll('.slide3');

let fourthCurrentSlide = 0;

let interval3 = setInterval(fourthSlide, 5000);

function fourthSlide() {
    slideFour[fourthCurrentSlide].setAttribute('class', 'slide3');
    fourthCurrentSlide = (fourthCurrentSlide + 1) % slideFour.length;
    slideFour[fourthCurrentSlide].setAttribute('class', 'slide3 active');
}

function openNewWindow(e, path){
window.open(path, "_blank", "width=400px,height=450px")
}