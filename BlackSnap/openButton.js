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

console.log("openButton Loaded")
// Code Start
targets(`[data-openButton="true"]`).forEach(element => {
    console.log("Targets Activated")
    element.addEventListener('click', function () {
        target("#connection").style.display = 'flex'

        setTimeout(() => {
            target("#connection").style.opacity = '1'
        }, 100)
    target(`html`).style.overflowY = `hidden`
})
});
target(`#connection`).querySelector(`#modalexit`).addEventListener(`click`, function () {
    target(`#connection`).style.opacity = `0`
    setTimeout(() => {
        target(`#connection`).style.display = `none`
    }, 500
    )
    target(`html`).style.overflowY = `auto`
})