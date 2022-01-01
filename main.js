import Alpine from 'alpinejs'
import './src/index.css'
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'
import 'animate.css'
import anime from 'animejs/lib/anime.es.js'

var bgFragment = document.createDocumentFragment();

for (let i = 0; i < 196; i++) {
  let box = document.createElement('div');
  box.classList.add('box-bg-items');
  bgFragment.appendChild(box);
}

let pageTwoBg = document.querySelector('.box-bg')

pageTwoBg.appendChild(bgFragment)

var dotsFragment = document.createDocumentFragment();

for (let i = 0; i < 196; i++) {
  let box = document.createElement('div');
  box.classList.add('box-grid');
  dotsFragment.appendChild(box);
}

let pageTwo = document.querySelector('.page-2')

pageTwo.appendChild(dotsFragment)

const textLoad = document.querySelector('.text-load-wrap')
textLoad.innerHTML = textLoad.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

document.addEventListener('alpine:init', () => {
  Alpine.data("page", () => ({
    name: 'Irma Gustia',
    email: 'irmaatiaa@gmail.com',
    password: 'akusayangiqbal',
    isLogin: false,
    showPopUp: false,
    successPopUp: false,
    welcomingPage: false,
    greetingWords: false,
    holdLoading: false,
    show: true,
    happyAnnivPopUp: false,
    get succes() { return this.isLogin },
    trigger(name, email, password) { 
      if (name === this.name && email === this.email && password === this.password) {
        this.isLogin = true
        this.show = false
        this.successPopUp = true
        this.welcomingPage = true
        anime.timeline({loop: true})
        .add({
          targets: '.pop-up-box .cute-box',
          rotateZ: 20,
          duration: 500,
          easing: 'linear'
        })
        .add({
          targets: '.pop-up-box .cute-box',
          rotateZ: 0,
          duration: 500,
          easing: 'linear'
        })

        anime.timeline({
          duration: 500,
          opacity: [100, 0]
        })
        .add({
          targets: '.title'
        })
        .add({
          targets: '.form'
        })

        loadingCircle()
        textLoading()
        console.log("Sukses")
      } else {
        console.log('Login gagal')
        this.showPopUp = true
        
      }
     },
     popUp() {
       this.showPopUp = ! this.showPopUp
     },
     successPopUpClose() {
       this.successPopUp = false
       this.greetingWords = true
       anime.timeline()
        .add({
          targets: '.page-2',
          opacity: [0, 1],
          delay: 2000,
          duration: 1000,
          easing: "easeOutExpo"
        })
        .add({
          targets: '.page-2 .box-grid',
          scale: [
            {value: 1, easing: 'easeOutSine', duration: 500},
            {value: 0, easing: 'easeInOutQuad', duration: 1200}
          ],
          delay: anime.stagger(1000, {grid: [14, 14], from: 'center'})
        })
        setTimeout(() => this.happyAnnivPopUp = true, 15000)
     },
  }))
})

function loadingCircle() {
  anime.timeline({loop: true})
  .add({
    targets: '.spin-circle',
    rotateZ: 360,
    duration: 8000,
    easing: 'linear'
  })
}

function delay(el) {
  anime.timeline()
  .add({
    targets: `${el}`,
    opacity: [0, 1],
    delay: 2000,
    duration: 1000,
    easing: "linear"
  })
}

function textLoading() {
  anime.timeline({loop: true})
  .add({
    targets: '.text-load-wrap .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.text-load-wrap',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
}

window.Alpine = Alpine
Alpine.start()

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 3,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  loop: true,
});

const swiperReverse = new Swiper(".swiperReverse", {
  centeredSlides: true,
  effect: "coverflow",
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  loop: true,
})

const swiperBg = new Swiper(".swiper-bg", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 3,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  loop: true,
})