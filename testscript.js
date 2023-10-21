function sectionscroll(){
    let eachsection = document.querySelectorAll('section')
    console.log(eachsection)
    console.log("1")
    if (document.querySelector('main')!=null){
        push = document.querySelector('main')
        console.log(push)
        eachsection.push(push)
        console.log(eachsection);
    }
}

sectionscroll();