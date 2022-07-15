




const ranks = document.querySelectorAll('.rank_box>div')
const rankB = document.querySelector('.rank_box')
const rankL = document.querySelectorAll('.keyword_rank .inner .right>div')
const rankOn = document.querySelector('.keyword_rank .inner .left .rank_box>div.on')



rankB.addEventListener('mouseout',() =>{
  ranks[0].classList.add('on')
})


ranks.forEach((rank) => {
  rank.addEventListener('mouseover',() => {
    ranks[0].classList.remove('on')
    rank.classList.add('on')
  })
  rank.addEventListener('mouseout',() => {
    rank.classList.remove('on')
  })
})

ranks[0].addEventListener('mouseover',() => {
  rankL[0].style.display = 'flex'
  rankL[1].style.display = 'none'
  rankL[2].style.display = 'none'
  rankL[3].style.display = 'none'
  rankL[4].style.display = 'none'
})
ranks[1].addEventListener('mouseover',() => {
  rankL[0].style.display = 'none'
  rankL[1].style.display = 'flex'
  rankL[2].style.display = 'none'
  rankL[3].style.display = 'none'
  rankL[4].style.display = 'none'
})
ranks[2].addEventListener('mouseover',() => {
  rankL[0].style.display = 'none'
  rankL[1].style.display = 'none'
  rankL[2].style.display = 'flex'
  rankL[3].style.display = 'none'
  rankL[4].style.display = 'none'
})
ranks[3].addEventListener('mouseover',() => {
  rankL[0].style.display = 'none'
  rankL[1].style.display = 'none'
  rankL[2].style.display = 'none'
  rankL[3].style.display = 'flex'
  rankL[4].style.display = 'none'
})
ranks[4].addEventListener('mouseover',() => {
  rankL[0].style.display = 'none'
  rankL[1].style.display = 'none'
  rankL[2].style.display = 'none'
  rankL[3].style.display = 'none'
  rankL[4].style.display = 'flex'
})







// VISUAL
new Swiper(".visual .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop:true,
  pagination: {
    el: ".visual .swiper-pagination",
  },
  navigation: {
      nextEl: ".visual .swiper-button-next",
      prevEl: ".visual .swiper-button-prev",
    }, 
});


// product
var swiper = new Swiper(".product .mySwiper", {

  slidesPerView: "8",
  spaceBetween: 0,
  pagination: {
    el: ".product .swiper-pagination",
    clickable: true,
  },
});

const subH = document.querySelectorAll('.product .sun_box .swiper-slide')
const subHs = document.querySelectorAll('.product .sun_box .swiper-slide .hover span')
console.log(subHs)
console.log(subH)

subH.forEach((subh) => {
  subh.addEventListener('click',() =>{
    subHs.forEach((subhs) => {
      subhs.style.color = 'yellow'
    })
  })
})


const collaboOn = document.querySelectorAll('.collabo .collabo_box>div')
const collaboBox = document.querySelector('.collabo .collabo_box')
console.log(collaboOn)

collaboBox.addEventListener('mouseleave',() => {
  collaboOn[0].classList.add('on')
})
collaboOn.forEach((col) => {
  col.addEventListener('mouseover',() =>{

    collaboOn[0].classList.remove('on')
    col.classList.add('on')
  })
})
collaboOn.forEach((col) => {
  col.addEventListener('mouseout',() =>{
    col.classList.remove('on')
  })
})