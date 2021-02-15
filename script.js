const slides = document.querySelectorAll('.slider-items__slide')
const accbubble = document.querySelectorAll('.slider-nav__bubble')

let activeSlide = 0

function showSlide() {
    if(document.querySelector('.slider-items__slide.active')) {
        document.querySelector('.slider-items__slide.active').classList.remove('active')
    }
    slides[activeSlide].classList.add('active')
}

showSlide()


function show() {
    if(document.querySelector('.slider-nav__bubble.active')) {
        document.querySelector('.slider-nav__bubble.active').classList.remove('active')
    }
    accbubble[activeSlide].classList.add('active')
}
show()


accbubble.forEach(function(bubble, i) {
   bubble.addEventListener("click", function() {
        activeSlide = i
        show()
        showSlide()


    });
});
