const container = document.querySelector(".container")
const footer = document.querySelector(".footer")
const menu_desplegable = document.querySelector(".menu-desplegable__list")
const bloque_menu_desplegable = document.querySelector(".menu-desplegable")

const footer_links = document.querySelectorAll(".aside__link--color2")
const parrafos_responsivos_950 = document.querySelectorAll(".responsive--950")
const links_menu_desplegable = document.querySelectorAll(".menu-desplegable__list__element")

const menu_desplegable_img = document.getElementById("menu-desplegable-img")
const boton_menu_desplegable = document.getElementById("menu-desplegable-btn")
const icon_dark_mode = document.querySelector("#icon-dark-mode")
const btn_dark = document.getElementById("btn-dark")
const img_marie = document.getElementById("img--marie")
const img_marie_and_bruce = document.getElementById("img--marie-and-bruce")
const box_img_marie_and_bruce = document.getElementById("box_img_marie_and_bruce")

let dark_mode = false

boton_menu_desplegable.addEventListener("click", menu_visible)

btn_dark.addEventListener("click", check_dark_mode)

window.addEventListener("resize", responsive_gt_950)

window.addEventListener("DOMContentLoaded", responsive_950)

window.addEventListener("resize", responsive_950)

for (let link of links_menu_desplegable){
  // TODO hacer funcion de menu desplegable
  link.addEventListener("click", ocultar_menu_desplegable)
}
