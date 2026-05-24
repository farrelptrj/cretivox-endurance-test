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
