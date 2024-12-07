let burger_menu = document.querySelector(".burger_menu")
let burger_side = document.querySelector(".burger_side")
let span1 = document.querySelector(".span1")
let span2 = document.querySelector(".span2")
let span3 = document.querySelector(".span3")
let side = true
burger_menu.addEventListener('click', () => {
    if (side == true) {
        burger_side.style.transform = `translateX(0%)`
        side = false
        span1.style.transform = `rotate(45deg) translate(5px, 5px)`
        span2.style.opacity = `0`
        span3.style.transform = `rotate(-45deg) translate(5px, -5px)`
    }
    else if (side == false) {
        burger_side.style.transform = `translateX(-100%)`
        span1.style.transform = `rotate(0deg) translate(0, 0)`
        span2.style.opacity = `1`
        span3.style.transform = `rotate(0deg) translate(0, 0)`
        side = true
    }
})