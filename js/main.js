new Swiper(".visual .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop:true,
  pagination: {
    el: ".visual .swiper-pagination",
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, 
});


const ranks = document.querySelectorAll('.rank_box>div')

ranks.forEach((rank) => {
  rank.addEventListener('mouseover',() => {
    rank.classList.add('on')
  })
})
ranks.forEach((rank) => {
  rank.addEventListener('mouseout',() => {
    rank.classList.remove('on')
  })
})