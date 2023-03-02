const btn_dark = document.getElementById("btn-dark")
const container = document.querySelector(".container")
const footer = document.querySelector(".footer")
const footer_links = document.querySelectorAll(".aside__link--color2")
const parrafos_responsivos_950 = document.querySelectorAll(".responsive--950")


const icon_dark_mode = document.querySelector("#icon-dark-mode")
const img_marie = document.getElementById("img--marie")
const img_marie_and_bruce = document.getElementById("img--marie-and-bruce")
const box_img_marie_and_bruce = document.getElementById("box_img_marie_and_bruce")

let dark_mode = false

btn_dark.addEventListener("click", check_dark_mode)

window.addEventListener("resize", responsive_gt_950)

window.addEventListener("DOMContentLoaded", responsive_950)

window.addEventListener("resize", responsive_950)

