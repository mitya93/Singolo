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




const PORTFOLIO = document.getElementById('portfolio-images');
const PORTFOLIO_TAGS = document.getElementById('portfolio-tags');

PORTFOLIO_TAGS.addEventListener('click', event => {
    if(event.target.classList.contains('potfolio__nav__list')){
        PORTFOLIO_TAGS.querySelectorAll('.potfolio__nav__list').forEach(el => el.classList.remove('tag-selected'));
        event.target.classList.add('tag-selected');
      
      for(i = 0; i < PORTFOLIO.children.length; i++){
        PORTFOLIO.children[i].style.order="0";
      }
      if(event.target.id == 'web'){
        for(let i = 0; i < 12; i+=4){
          PORTFOLIO.children[i].style.order="1";
        }
      }
      if(event.target.id == 'all') PORTFOLIO.style.flexDirection = 'row';
      if(event.target.id == 'graphic'){
        for(let i = 1; i < 12; i+=2){
          PORTFOLIO.children[i].style.order="2";
        }
      }
      if(event.target.id == 'art'){
        for(i = 0; i < 12; i+=2){
          PORTFOLIO.children[i].style.order='3';
        }
      }
    }
  })

  PORTFOLIO.addEventListener('click', event => {
    let target = event.target;
    if (target.tagName == 'IMG') {
        PORTFOLIO.querySelectorAll('img').forEach(item => {
            item.style.boxShadow = "none";
        });
        event.target.style.boxShadow = "0px 0px 0px 5px #F06C64";
    }
  })