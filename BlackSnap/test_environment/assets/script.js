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

// Create Features
data = [
    {
        'name': 'Pricness Frenxh',
        'categories': 'Modeling Photoshoot',
        'link': 'https://www.link.com',
        'date': '3.8.24',
        'imgs': [
            './featured/princess_1.jpg',
            './featured/princess_2.jpg',
            './featured/princess_3.jpg',
            './featured/princess_4.jpg',
            './featured/princess_5.jpg',
        ],
    },{
        'name': 'Micah',
        'categories': 'Fashion Photography',
        'link': 'https://www.link.com',
        'date': '3.8.24',
        'imgs': [
            './featured/micah_1.jpg',
            './featured/micah_2.jpg',
            './featured/micah_3.jpg',
            './featured/micah_4.jpg',
        ],
    },{
        'name': 'Embracing the Challenge',
        'categories': 'Candid Photography',
        'link': 'https://www.link.com',
        'date': '3.8.24',
        'imgs': [
            './featured/adonis_1.jpg',
            './featured/adonis_2.jpg',
            './featured/adonis_3.jpg',
            './featured/adonis_4.jpg',
        ],
    },{
        'name': 'Destiny',
        'categories': 'Fashion Photography',
        'link': 'https://www.link.com',
        'date': '3.8.24',
        'imgs': [
            './featured/destiny_1.jpg',
            './featured/destiny_2.jpg',
            './featured/destiny_3.jpg',
            './featured/destiny_4.jpg',
        ],
    },{
        'name': 'Kleep Style',
        'categories': 'Fashion Photography',
        'link': 'https://www.link.com',
        'date': '3.8.24',
        'imgs': [
            './featured/kleep_1.jpg',
            './featured/kleep_2.jpg',
            './featured/kleep_3.jpg',
            './featured/kleep_4.jpg',
        ],
    }
]

featured_imgs = []

class _Album{
    /**
     * 
     * @param {Array} source_data Data of what is supposed to be in the album
     * @param {Object} targeting_0 Featuring Section
     * @param {Object} targeting_1 Selections Section
     * @param {Number} index the position the album has within the array
     */
    constructor(source_data, targeting_0, targeting_1, index){
        this.source = source_data
        this.name = source_data.name
        this.categories = source_data.categories
        this.link = source_data.link
        this.date = source_data.date
        this.imgs = source_data.imgs
        this.index = index

        this.albumPreview
        this.imgObjects = []
        this.button
        this.slides
        this.feature = targeting_0
        this.selections = targeting_1
    }

    check_bounds(object){
        let bounds = object.getBoundingClientRect()
        if (bounds.left >= 0 && bounds.right <= window.innerWidth) {
            return true
        } else {
            return false
        }
    }

    focused_slides(){
        this.imgObjects.forEach(function (elem, index){
           if (this.check_bounds(elem) == true){
            elem.setAttribute('data-is-focused',true)
           } else{
            elem.setAttribute('data-is-focused',false)
           }
        },{check_bounds:this.check_bounds})
    }

    /**
     *   Creates the slides section 
     *  @dependencies   this.slides, this.imgObjects
    */
    create_slides(){
        
        this.slides = document.createElement('div')
        this.slides.setAttribute('class','slides')
        this.albumPreview.appendChild(this.slides)


        this.imgs.forEach(function (elem, index){
            this.imgObjects[index] = document.createElement('img')
            this.imgObjects[index].setAttribute('src',elem)
            this.imgObjects[index].setAttribute('alt','')
            if (index == 0){
                this.imgObjects[index].setAttribute('data-is-focused',true)
            } else {
                this.imgObjects[index].setAttribute('data-is-focused',false)
            }
            this.target.appendChild(this.imgObjects[index])
        },{target: this.slides, imgObjects : this.imgObjects})
    }

    /**
     * Creates the info section for the album object
    */
    create_info(){
        let info = document.createElement('div')
        info.setAttribute('class','info')
        info.innerHTML = `
            <h3>${this.name}</h3>
            <p>${this.categories}</p>
            <a href="${this.link}">View More</a>
        `
        this.albumPreview.appendChild(info)
    }

    /**
     * Creating the Album slide
     */
    create_albumPreview(){
        this.albumPreview = document.createElement('div')
        this.albumPreview.setAttribute('class','album')
        this.albumPreview.setAttribute('data-selection-num', this.index)
        this.feature.appendChild(this.albumPreview)
    }

    /**
     * Creating the button & thumbnail
     */
    create_button(){
        this.button = document.createElement('div')
        this.button.setAttribute('style',`background-image:url(${this.imgs[0]})`)
        this.button.setAttribute('type',`button`)
        this.button.innerHTML = `
            <button type="button" data-selection-num = ${this.index}>
                <p>${this.name}</p>
                <p>${this.categories}</p>
                <p>${this.date}</p>
            </button>
        `
        this.selections.appendChild(this.button)
    }
    
    set_activation(){
        this.button.addEventListener("click",function(elem){
            let target_obj = elem.target.parentElement.parentElement.parentElement
            target_obj.querySelectorAll('.album').forEach(function(elem){elem.setAttribute('active','false')})
            target_obj.querySelectorAll('button[type="button"]').forEach(function(elem){elem.setAttribute('active','false')})
            target_obj.querySelectorAll(`[data-selection-num = '${elem.target.getAttribute('data-selection-num')}']`).forEach(function(elem){elem.setAttribute('active','true')})
        })   
    }

    create(){
        this.create_albumPreview()
        this.create_slides()
        this.slides.addEventListener("scroll",()=>{this.focused_slides()})
        this.create_info()
        this.create_button()
        this.set_activation()
    }

    check(){
        check('this works')
        check(this)
    }
}

class _Featured{
    constructor(targeting,source_data){
        this.canvas = target(targeting)
        this.data = source_data
        this.featuredItems = []
        this.selections
        this.featuring
    }

    create_selections(){ //Creates the scrollbar to push Button objects
        this.selections = document.createElement('div')
        this.selections.setAttribute('class','selections')
        this.canvas.appendChild(this.selections)
    }

    create_featuredObjects(){
        this.data.forEach(function (elem,index){
            this.item[index] = new _Album(elem, this.featuring, this.selections, index)
            this.item[index].create()
        }, {item : this.featuredItems, featuring : this.featuring, selections : this.selections})
    }
    
    create_featuring(){
        this.featuring = document.createElement('div')
        this.featuring.setAttribute('class','featuring')
        this.canvas.appendChild(this.featuring)
    }

    onStart(){
        this.canvas.querySelector('button').click()
    }

    create(){//Localized method for implementing Featured
        this.create_featuring()
        this.create_selections()
        this.create_featuredObjects()
        this.onStart()
    }
}

// Implement
function scriptManager() {
    test = new _Featured('#featured',data)
    test.create()
}

scriptManager()