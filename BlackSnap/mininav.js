// Quality of Life

function target(selector) {
    output = document.querySelector(selector)
    return output
}

function targets(selector) {
    output = document.querySelectorAll(selector)
    return output
}

function check(input) {
    console.log(input)
}

// Get Nav Bar button
navButton = target("#mini-nav")
navExit = target("#nav-exit")
navButton.addEventListener("click", function(){
    target("nav").setAttribute(`class`,`opened`)
    target("html").setAttribute(`style`,`overflow-y:hidden`)
})
navExit.addEventListener("click", function(){
    target("nav").setAttribute(`class`,``)
    target("html").setAttribute(`style`,`overflow-y:auto`)
})