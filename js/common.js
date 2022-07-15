const headerS = document.querySelector('header .container')
const headerLnb = document.querySelector('header .container .lnb')
const searchBtn = document.querySelector('header .search')
const headerSearch = document.querySelector('header .search_box')

window.addEventListener('scroll',() => {
  if(scrollY > 10) {
    headerS.style.background = '#000'
  }
  if(scrollY == 0) {
    headerS.style.background = ''
  }
})

headerLnb.addEventListener('mouseenter',() => {
  headerS.classList.add('hover')
})
headerS.addEventListener('mouseleave',() => {
  headerS.classList.remove('hover')
})

// 검색
searchBtn.addEventListener('click',() => {
  if(headerSearch.style.height == '0px'){
    headerSearch.style.height = '440px'
    headerS.style.background = '#000'
    console.log('400')
  }else {
    headerSearch.style.height = '0'
    headerSearch.style.borderTop = ""
  }
})

// 장바구니
const cartBtn = document.querySelector('header .cartBtn')
const cartBox = document.querySelector('header .cart')

cartBtn.addEventListener('click',() => {
  if(cartBox.style.right == '-400px'){
    cartBox.style.right = '0'
    cartBox.style.borderTop = '1px solid #fff'
  }else {
    cartBox.style.right = '-400px'
  }
})

