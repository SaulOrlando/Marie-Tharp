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
  icon_dark_mode.setAttribute("src", "../icons/sol gris.svg")
  menu_desplegable_img.setAttribute("src", "../icons/menu2.svg")

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
  icon_dark_mode.setAttribute("src", "../icons/sun_light.svg")
  menu_desplegable_img.setAttribute("src", "../icons/menu.svg")

  footer.style.background = "#9b59b6"
  footer.style.color = "#000"

  for (let link of footer_links){
    link.style.color = "#000"
  }
}

function menu_visible() {
  // TODO me falta que cuando se le de un click a un link se cierre el menu de hamburguesa
  menu_desplegable.classList.toggle("menu-desplegable__list--visible")

  btn_dark.classList.toggle("oculto")

  bloque_menu_desplegable.classList.toggle("menu-desplegable--activo")

  boton_menu_desplegable.classList.toggle("menu-desplegable__btn--activo")
}

function responsive_950() {
  if (window.innerWidth <= 950) {
    for (let parrafo of parrafos_responsivos_950){
      parrafo.classList.replace("block-flex-child", "block-flex-child2")
    }

    box_img_marie_and_bruce.classList.remove("oculto")
  }
}

function responsive_gt_950() {
  if (window.innerWidth > 950){
    img_marie.classList.add("mostrar")

    box_img_marie_and_bruce.classList.add("oculto")
  }
}
