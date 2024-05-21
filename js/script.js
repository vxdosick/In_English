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
//------------------------------
let slideContainerCard = document.querySelector(".slider__container-card")
let wordArr = [
    {
        "word": "Home",
        "transcription": "houm",
        "translation": "Дом"
    },
    {
        "word": "Word",
        "transcription": "word",
        "translation": "Слово"
    },
    {
        "word": "Pen",
        "transcription": "pen",
        "translation": "Карандаш"
    }
]
wordArr.forEach((el, index)=> {
let card = document.createElement("div")
card.classList.add("slide__card")
card.innerHTML = `
    <div>
        <h3 class="text-center mb-4 word" data-translation="${el.translation}">${el.word}</h3>
        <p class="text-center blockquote-footer fs-5">${el.transcription}</p>
    </div>
    <div class="text-center">
        <button class="btn btn-success translation__button">show</button>
    </div>
`;
slideContainerCard.appendChild(card)
})
//--------------------
let slideCard = document.querySelectorAll(".slide__card")
slideCard.forEach((el, index) => {
    el.style.transform = `translateX(${index * 100}%)`
})

let prevCard = document.querySelector(".prev__card")
let nextCard = document.querySelector(".next__card")

let slideNumberCard = 0

slideCard.forEach((elem, index)=> {
    elem.style.left = `${index * 100}%`
})

prevCard.addEventListener("click", ()=> {
    slideNumberCard--
    changeSLidesCard()
})
nextCard.addEventListener("click", ()=> {
    slideNumberCard++
    changeSLidesCard()
})
function changeSLidesCard() {
    if (slideNumberCard === slideCard.length) {
        slideNumberCard = 0
    }
    if (slideNumberCard < 0) {
        slideNumberCard = slideCard.length -1
    }
    slideCard.forEach((elem)=> {
        elem.style.transform = `translateX(-${slideNumberCard * 100}%)`
    })
}
let translationButton = document.querySelectorAll(".translation__button")
translationButton.forEach((el)=> {
    el.addEventListener("click", (event)=> {
        let clickedButton = event.target
        let card = clickedButton.closest(".slide__card")
        let word = card.querySelector(".word")
        word.innerHTML = word.dataset.translation
        console.log(word.dataset.translation);
    })
})
