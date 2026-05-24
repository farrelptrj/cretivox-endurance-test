/* CURSOR */

const cursor =
document.querySelector(".cursor")

document.addEventListener(
  "mousemove",
  (e)=>{

    cursor.style.left =
    e.clientX + "px"

    cursor.style.top =
    e.clientY + "px"

})

/* TYPING */

const text = [

  "Front-End Developer",

  "Creative Enthusiast",

  "Interactive Designer",

  "Fashion Culture Lover"

]

let count = 0
let index = 0
let currentText = ""
let letter = ""

function type(){

  if(count === text.length){
    count = 0
  }

  currentText = text[count]

  letter =
  currentText.slice(0, ++index)

  document.querySelector(
    ".typing"
  ).textContent = letter

  if(letter.length === currentText.length){

    count++

    index = 0

  }

  setTimeout(type,120)

}

type()

/* LOADER */

window.addEventListener(
  "load",
  ()=>{

    const loader =
    document.querySelector(".loader")

    loader.style.opacity = "0"

    setTimeout(()=>{

      loader.style.display = "none"

    },1000)

})

/* global gsap, ScrollTrigger */

gsap.registerPlugin(ScrollTrigger);

/* TEXT REVEAL */

gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 80,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",

      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
});

/* IMAGE REVEAL */

gsap.utils.toArray(".image-reveal").forEach((img) => {
  gsap.fromTo(
    img,
    {
      opacity: 0,
      scale: 1.1,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",

      scrollTrigger: {
        trigger: img,
        start: "top 85%",
      },
    }
  );
});
