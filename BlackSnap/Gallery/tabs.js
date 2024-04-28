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

// Tabs code
function deselectAll(){
    targets(`[role="tabpanel"]`).forEach(element => {
        element.setAttribute('aria-selected','false')
    });
    targets(`[role="tab"]`).forEach(element => {
        element.setAttribute('aria-selected','false')
    });
}

console.log("Gallery Javascript Loaded")

deselectAll()

targets(`[data-tab-position="0"]`).forEach(element => {
    element.setAttribute('aria-selected','true')
    console.log(element)
});
target('#albums').querySelectorAll(`[role='tab']`).forEach(elem =>{
    elem.addEventListener('click',function(elem){
        deselectAll()
        target('#albums').querySelectorAll(`[data-tab-position='${elem.target.getAttribute('data-tab-position')}']`).forEach(element => {
            element.setAttribute('aria-selected','true')
        })
    })
})