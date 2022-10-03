

let objetoServicioampliado = JSON.parse(sessionStorage.getItem("objetoServicioAmpliado"))

console.log(objetoServicioampliado)

let imagencarrusel1SA = document.getElementById("imagencarrusel1")
let imagencarrusel2SA = document.getElementById("imagencarrusel2")
let imagencarrusel3SA = document.getElementById("imagencarrusel3")

let tituloSA = document.getElementById("titulo")
let descripcionSA = document.getElementById("descripcion")
let videoSA = document.getElementById("video")

imagencarrusel1SA.src=objetoServicioampliado.foto


tituloSA.textContent=objetoServicioampliado.titulo
descripcionSA.textContent=objetoServicioampliado.descripcion2
videoSA.src=objetoServicioampliado.video