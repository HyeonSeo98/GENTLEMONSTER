const proS = document.querySelector('.product .second')
console.log(proS)

window.addEventListener('scroll', () => {
  if(window.scrollY == '1500') {
    proS.style.display ='flex'
  }
  console.log(window.scrollY)
})

const quikView = document.querySelector('.product .container .quik_view')
const basicView =document.querySelector('.product .container .basic_view')
const productList = document.querySelectorAll('.product .content .pro_box')
console.log(productList)

quikView.addEventListener('click',() => {
  quikView.style.display = 'none'
  basicView.style.display ='block'
  productList.forEach((prol) => {
    prol.classList.add('on')
    prol.style.width = '225px'
  })
})

basicView.addEventListener('click',() => {
  quikView.style.display = 'block'
  basicView.style.display ='none'
  productList.forEach((prol) => {
    prol.classList.remove('on')
    prol.style.width = '342.5px'
  })
})


const color01s = document.querySelectorAll('.color01')
const color02s = document.querySelectorAll('.color02')
const color03s = document.querySelectorAll('.color03')
const color04s = document.querySelectorAll('.color04')
const color05s = document.querySelectorAll('.color05')
const productImgs = document.querySelectorAll('.product .content img')
console.log(productImgs)


color01s.forEach(function(color01,index) {
  color01.addEventListener('mouseover',() => {
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_01.jpg')
  })
  color01.addEventListener('mouseout',() => {
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_01.jpg')
  })
})
color02s.forEach(function(color02, index){
  color02.addEventListener('mouseover',() => {
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_02.jpg')
  })
  color02.addEventListener('mouseout',() => {
    productImgs[index].src = productImgs[index].src.replace('_02.jpg','_01.jpg')
  })
})
color03s.forEach(function(color03, index){
  color03.addEventListener('mouseover',() => {
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_03.jpg')
  })
  color03.addEventListener('mouseout',() => {
    productImgs[index].src = productImgs[index].src.replace('_03.jpg','_01.jpg')
  })
})
color04s.forEach(function(color04, index){
  color04.addEventListener('mouseover',() => {
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_04.jpg')
  })
  color04.addEventListener('mouseout',() => {
    productImgs[index].src = productImgs[index].src.replace('_04.jpg','_01.jpg')
  })
})
color05s.forEach(function(color05, index){
  color05.addEventListener('mouseover',() => {
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_05.jpg')
  })
  color05.addEventListener('mouseout',() => {
    productImgs[index].src = productImgs[index].src.replace('_05.jpg','_01.jpg')
  })
})