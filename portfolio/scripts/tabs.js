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

// Getting JSON Data
async function get_data(directory){
    const request = new Request(directory)
    const response = await fetch(request)
    const output = await response.json()

    return output
}

async function make_tabs(data_list,tab_type,parent_element){
    data = await get_data(data_list)
    parent_elem = target(parent_element)

    console.log(data)

    if (tab_type == "tab_basic"){
        data.objects.forEach(val => {
            const element = document.createElement('a')
            element.setAttribute(`href`,`${val.link}`)
            element.setAttribute(`style`,`background-color: ${val.color}`)
            element.setAttribute(`class`,`tab`)
            
            element.innerHTML = `
                    <img class="tab_thumbnail" src="${val.thumbnail}">
                    <div class="label">
                        <h3>
                            ${val.name}
                        </h3>
                        <p>${val.client}</p>
                    </div>
            `
            parent_elem.appendChild(element)
            
        })
    }

}


function script_manager(){
    make_tabs(
        './data/works.json',
        'tab_basic',
        '[data-cLayout="tabs"]'
    )
}

script_manager()