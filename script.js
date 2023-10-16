function toggleMode() {
  const html = document.documentElement

  /*   if (html.classList.contains('light')) {
      html.classList.remove('light')
    } else {
      html.classList.add('light')
    }*/

  html.classList.toggle("light")

  // pegar a imagem

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "assets/assets/Captura de tela 2023-09-18 154258 1.png"
    )
  } else {
    img.setAttribute(
      "src",
      "assets/assets/Captura de tela 2023-09-18 154258 2.png"
    )
  }
  //substituir  a img
  //se tiver light mode add img light
}
