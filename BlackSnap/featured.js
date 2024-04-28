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

// Feature Functions
targetDiv = target('[data-featured-carousel="true"]')

// Establish Foundation
function createShowcase(destination) {
    let showCase = document.createElement('div')
    showCase.setAttribute(`class`, `showcase`)
    destination.appendChild(showCase)
}
function createSelection(destination) {
    let selection = document.createElement('div')
    selection.setAttribute(`class`, `selection`)
    selection.innerHTML = `<div class="selContainer"></div>`
    destination.appendChild(selection)
}

// Establish Featured Pieces
// Pieces
let photos = [
    {
        name: "Embracing the Challenge",
        thumbnail: "Gallery/imgs/embracing_challenge/ec05.jpg",
        date: "",
        tags: "Candid Photography",
        link: "Gallery/embracing-challenge.html",
        color: "green"
    },
    {
        name: "Ignite",
        thumbnail: "Gallery/imgs/destiny-lashon-chochran_fashion-show/dlc_fashion3.jpg",
        date: "",
        tags: "Fashion Photography",
        link: "Gallery/ignite.html",
        color: "green"
    },
    {
        name: "Princess",
        thumbnail: "Gallery/imgs/princess/princess8.jpg",
        date: "",
        tags: "Fashion Photography",
        link: "Gallery/princess.html",
        color: "green"
    },
    {
        name: "Kleep Style",
        thumbnail: "Gallery/imgs/kleep/kleep2.jpg",
        date: "",
        tags: "Fashion Photography",
        link: "Gallery/kleepstyle.html",
        color: "green"
    },
]

check(photos[0])

class featuredArt {
    constructor(name, thumbnail, date, tag, link, color, position) {
        this.name = name
        this.thumbnail = thumbnail
        this.date = date
        this.tag = tag
        this.link = link
        this.color = color
        this.position = position
        this.scene = document.createElement("div")
        this.button = document.createElement("button")
    }

    create() {
        // Create Scene
        this.scene.innerHTML =`<img src="${this.thumbnail}" alt=""><div><h3>${this.name}</h3><p>${this.tag}</p><p>${this.date}</p><a href="${this.link}">View More</a></div>`
        this.scene.setAttribute('role', `tabpanel`)
        this.scene.setAttribute('data-tab-position', `${this.position}`)
        targetDiv.querySelector('.showcase').appendChild(this.scene)
        // Create Carousel Button
        this.button.setAttribute('style', `background: url(${this.thumbnail}); background-size:cover; background-position: 100% 40%;`)
        this.button.setAttribute('role', `tab`)
        this.button.setAttribute('data-tab-position', `${this.position}`)
        targetDiv.querySelector(`.selContainer`).appendChild(this.button)

        if (this.position == 0){
            this.scene.setAttribute('aria-selected','true')
            this.button.setAttribute('aria-selected','true')
        } else {
            this.scene.setAttribute('aria-selected','false')
            this.button.setAttribute('aria-selected','false')
        }


        this.button.addEventListener('click',(elem)=>{
            target('#featured').querySelectorAll(`[aria-selected="true"]`).forEach(function (elem){elem.setAttribute('aria-selected','false')})
            console.log(elem.target)
            console.log(elem.target.getAttribute("data-tab-position"))
            targets(`[data-tab-position="${elem.target.getAttribute("data-tab-position")}"]`).forEach(function(elem){elem.setAttribute('aria-selected','true')})
            console.log(target(`#featured`).querySelector(`.showcase`).querySelector(`[aria-selected="true"]`))
            target(`#featured`).querySelector(`.showcase`).querySelector(`[aria-selected="true"]`).focus()
        })
    }
}
let featuredOBJ = []
function createArt(){
    photos.forEach((elem, index) => {
        featuredOBJ.push(new featuredArt(photos[index].name, photos[index].thumbnail, photos[index].date, photos[index].tags, photos[index].link, photos[index].color, index))
        featuredOBJ[index].create()
    })
}


function scriptManager() {
    createShowcase(targetDiv)
    createSelection(targetDiv)
    createArt()
}

scriptManager()