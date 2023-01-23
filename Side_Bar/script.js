var btnDarkMode = document.getElementById("dark")
var btnLightMode = document.getElementById("light")
var navBar = document.querySelector("nav")
var body = document.body
var btnMenu = document.querySelector(".menu")

const themeDetails = {
  light : {
    mode : "light-mode",
  },
  dark : {
    mode : "dark"
  }
}

function getTheme() {
  let themeCurret = localStorage.getItem("theme")
  let themeCurretObj = JSON.parse(themeCurret)

  // Varificar se tem item na armazenamento local
  if (themeCurret) {
    // TEM ITEM
    body.classList.add(themeCurretObj.mode)
    if (themeCurretObj.mode === "dark") {
      btnDarkMode.classList.add("tema-ativo")
      btnLightMode.classList.remove("tema-ativo")
    
      btnDarkMode.classList.remove("tema-desativado")
      btnLightMode.classList.add("tema-desativado")
    } 
    else {          
      btnLightMode.classList.add("tema-ativo")
      btnDarkMode.classList.remove("tema-ativo")

      btnLightMode.classList.remove("tema-desativado")
      btnDarkMode.classList.add("tema-desativado")
    }
  }
}
getTheme()

btnDarkMode.addEventListener("click", () => {
  body.classList.add("dark")

  //Definindo o tema dark no armazenamento local
  localStorage.setItem("theme", JSON.stringify(themeDetails.dark))

  getTheme()
})

btnLightMode.addEventListener("click", () => {
  body.classList.remove("dark")

  //Definindo o tema light no armazenamento local
  localStorage.setItem("theme", JSON.stringify(themeDetails.light))

  getTheme()
})

btnMenu.addEventListener("click", () => navBar.classList.toggle("mini-sidebar"))