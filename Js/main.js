let tab_btn = document.querySelectorAll(".tab_btn"),
tab_cards = document.querySelectorAll(".tab_cards"),
kr_btn1 = document.querySelector(".kr_btn1"),
kr_btn2 = document.querySelector(".kr_btn2"),
kr_card1 = document.querySelector(".kr_card1"),
kr_card2 = document.querySelector(".kr_card2"),
kr_card3 = document.querySelector(".kr_card3")




;
tab_btn[0].classList.add("activ")
tab_cards[0].style.display = "grid"
tab_btn.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        tab_cards.forEach((cards) => {
            cards.style.display = "none"
        })
        tab_cards[i].style.display = "grid"
        tab_btn.forEach((item) => {
            item.classList.remove("activ")
        })
        tab_btn[i].classList.add("activ")
    })
})

kr_card2.classList.add("active")

kr_btn2.addEventListener("click", () => {
    kr_card3.classList.add("active")
    kr_card2.classList.remove("active")
    kr_card1.classList.remove("active")
})

kr_btn1.addEventListener("click", () => {
    kr_card1.classList.add("active")
    kr_card2.classList.remove("active")
    kr_card3.classList.remove("active")
})
