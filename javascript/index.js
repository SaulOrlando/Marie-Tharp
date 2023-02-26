const btn_dark = document.getElementById("btn-dark")
const container = document.querySelector(".container")
const icon_dark_mode = document.querySelector("#icon-dark-mode")

const footer = document.querySelector(".footer")
const footer_links = document.querySelectorAll(".aside__link--color2")

let dark_mode = false

function check_dark_mode(){
  if (!dark_mode){
    activate_dark_mode()
  }else {
    activate_light_mode()
  }
}

function activate_dark_mode(){
  dark_mode = true

  container.style.transition = "all 0.2s ease"
  container.style.background = "#000"
  container.style.color = "#fff"
  icon_dark_mode.setAttribute("src", "../icons/sun.svg")

  footer.style.background = "#2e1b47"
  footer.style.color = "#fff"

  for (let link of footer_links){
    link.style.color = "#fff"
  }
}

function activate_light_mode(){
  dark_mode = false

  container.style.transition = "all 0.2s ease"
  container.style.background = "#fff"
  container.style.color = "#000"
  icon_dark_mode.setAttribute("src", "../icons/light.svg")

  footer.style.background = "#9b59b6"
  footer.style.color = "#000"

  for (let link of footer_links){
    link.style.color = "#000"
  }
}

btn_dark.addEventListener("click", check_dark_mode)

