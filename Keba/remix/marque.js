function check(input) {
    console.log(input)
}

function target(input) {
    output = document.querySelector(input)
    return output
}

function targets(input) {
    output = document.querySelectorAll(input)
    return output
}

let skills = [
    `Unity`,
    `Unreal Engine`,
    `C# Programming`,
    `C++ Programming`,
    `Python Programming`,
    `Autodesk Maya`,
    `Substance Painter`,
    `Adobe Photoshop`,
    `Adobe Illustrator`,
    `Unity`,
    `Unreal Engine`,
    `C# Programming`,
    `C++ Programming`,
    `Python Programming`,
    `Autodesk Maya`,
    `Substance Painter`,
    `Adobe Photoshop`,
    `Adobe Illustrator`
]

class List {
    constructor(label, position, targeting) {
        this.label = label
        this.position = position
        this.target = target(targeting)
        this.element = document.createElement("li")
    }

    create() {
        let content = document.createTextNode(this.label)
        this.element.appendChild(content)
        this.target.appendChild(this.element)
        this.element.setAttribute(`style`, `left: ${this.position}px`)
    }
    move(rate) {
        this.position += rate;
        this.element.setAttribute(`style`, `left: ${this.position}px`)
        if (this.position <= this.element.offsetWidth * -3) {
            this.element.setAttribute(`style`, `transition: 0s all; `)
            this.position += 198 * skills.length
            this.element.setAttribute(`style`, `transition: 0s all; left: ${this.position}px`)
        }
    }
}


const myList = []

function create(){
    skills.forEach((elem, index) => {
        myList[index] = new List(elem, index * 198, ".overflowing")
        myList[index].create()
    })
    
    setInterval(() => {
        skills.forEach((elem, index) => {
            myList[index].move(-100)
        })
    }, 1000);
}

function populate() {
    marqueespace = target(`.overflowing`)
    check(marqueespace)
}



// Below is script manager, please be careful editing
function scriptmanager() {
    check(skills)
    create()
    populate()
}

scriptmanager()