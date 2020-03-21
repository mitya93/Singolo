const headerNav = document.getElementById('header__nav');

headerNav.addEventListener('click', (event) => {
    headerNav.querySelectorAll('a').forEach(el => el.classList.remove('header__active'));
    event.target.classList.add('header__active');
});



let slider = document.querySelectorAll('.iphone_style');
let currentSlider = 0;
let isEnabled = true;

function hideSlide(direction) {
    isEnabled = false;
    slider[currentSlider].classList.add(direction);
    slider[currentSlider].addEventListener('animationend', function () {
            this.classList.remove('iphone__active', direction);
    })
}
function showSlide(direction) {
    slider[currentSlider].classList.add('next', direction);
    document.querySelector('.slider').style.backgroundColor = document.querySelector('.next-slide')
    slider[currentSlider].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('iphone__active');
        isEnabled = true;
    })
}
function changeCurrentSlide(n) {
    currentSlider = (n + slider.length) % slider.length;
}
function previousSlide(n) {
    hideSlide('to-right');
    changeCurrentSlide(n - 1);
    showSlide('from-left');
}
function nextSlide(n) {
    hideSlide('to-left');
    changeCurrentSlide(n + 1);
    showSlide('from-right');
}
document.querySelector('.left.chev_l').addEventListener('click', function () {
    if (isEnabled) {
        previousSlide(currentSlider);
    }
})
document.querySelector('.right.chev_r').addEventListener('click', function () {
    if (isEnabled) {
        nextSlide(currentSlider);
    }
});