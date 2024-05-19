const slide = document.querySelectorAll(".slide")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let slideNumber = 0

slide.forEach((elem, index)=> {
    elem.style.left = `${index * 100}%`
})

prev.addEventListener("click", ()=> {
    slideNumber--
    changeSLides()
})
next.addEventListener("click", ()=> {
    slideNumber++
    changeSLides()
})
function changeSLides() {
    if (slideNumber === slide.length) {
        slideNumber = 0
    }
    if (slideNumber < 0) {
        slideNumber = slide.length -1
    }
    slide.forEach((elem)=> {
        elem.style.transform = `translateX(-${slideNumber * 100}%)`
    })
}

