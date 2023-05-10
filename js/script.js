let textOne = document.querySelector('#typed');
let titleOne = document.querySelector('#title');
function animOnScroll(text, speed) {
   let h = text.getBoundingClientRect().height;
   const textHeight = text.offsetHeight;
   const textOffset = affset(text).top;
   const start = 4;
   let point = window.innerHeight - textHeight / start;
   if (textHeight > window.innerHeight) {
      point = window.innerHeight - window.innerHeight / start;
   }
   let inner = text.innerText;
   text.style.height = h + 'px'
   text.innerText = '';
   let interval = setInterval(() => {
      if ((pageYOffset > textOffset - point) && pageYOffset < (textOffset + textHeight)) {
         clearInterval(interval);
         let i = 0;
         let int = setInterval(() => {
            if (inner[i] === '\ud83d') {
               text.innerHTML += '<div class=\'br\'></div>'
               i += 2;
            }
            text.innerHTML += inner[i];
            if (i >= inner.length - 1) {
               clearInterval(int);
               text.style.height = 'auto'
            }
            i++;
         }, speed)
      }
   }, 210)
}
animOnScroll(textOne, 8);
animOnScroll(titleOne, 100);
function affset(el) {
   const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}




let stars = document.querySelector('#stars');
let moon = document.querySelector('#moon');
let ges = document.querySelector('#mountains_behind');
let text = document.querySelector('#text');
let btn = document.querySelector('#btn');
window.onscroll = () => {
   let y = window.scrollY
   stars.style.margin = (y * 0.45) + "px"
   moon.style.marginTop = (y * 1.40) + "px"
   ges.style.marginTop = (y * 0.55) + "px"
   text.style.marginRight = (y * 4) + "px"
   btn.style.marginTop = (y * 0.55) + "px"
}

