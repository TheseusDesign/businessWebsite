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

// Code
const loadCon = target(`#onload`)
window.addEventListener('load', () => {
    setTimeout(() => {
        loadCon.style.opacity = '0'
    }, 500);
    setTimeout(() => {
        loadCon.style.display = 'none'
    }, 1500);
});