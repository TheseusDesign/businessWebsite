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
        name: "Destiny LaShon Cochran - 0",
        thumbnail: "Assets/Featured/featured_1.jpg",
        date: "unknown",
        tags: "Fashion Photography",
        link: "noLink",
        color: "green"
    },
    {
        name: "Destiny LaShon Cochran - 0",
        thumbnail: "Assets/Featured/featured_2.jpg",
        date: "unknown",
        tags: "Fashion Photography",
        link: "noLink",
        color: "green"
    },
    {
        name: "Destiny LaShon Cochran - 0",
        thumbnail: "Assets/Featured/featured_3.jpg",
        date: "unknown",
        tags: "Fashion Photography",
        link: "noLink",
        color: "green"
    },
    {
        name: "Destiny LaShon Cochran - 1",
        thumbnail: "Assets/Featured/featured_4.jpg",
        date: "unknown",
        tags: "Fashion Photography",
        link: "noLink",
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
        targetDiv.querySelector('.showcase').appendChild(this.scene)
        // Create Carousel Button
        this.button.setAttribute('style', `background: url(${this.thumbnail}); background-size:cover; background-position: 100% 40%;`)
        targetDiv.querySelector(`.selContainer`).appendChild(this.button)
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