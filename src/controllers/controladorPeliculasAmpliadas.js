

let peliculaampliada = JSON.parse(sessionStorage.getItem('objetopeliculaAmpliado'))
		console.log(peliculaampliada)


let fotop =document.getElementById("foto")
let titulop = document.getElementById("titulo")
let tituloOriginalp = document.getElementById("tituloOriginal")
let fechaDeEstrenop = document.getElementById("fechaDeEstreno")
let clasificacionp = document.getElementById("clasificacion")
let duracionp = document.getElementById("duracion")
let generop = document.getElementById("genero")
let paisp = document.getElementById("pais")
let descripcionp = document.getElementById("descripcion")
let videop = document.getElementById("video")

fotop.src=peliculaampliada.foto
titulop.textContent=peliculaampliada.nombre
tituloOriginalp.textContent=peliculaampliada.nombreOriginal
fechaDeEstrenop.textContent=peliculaampliada.fechaDeEstreno
clasificacionp.textContent=peliculaampliada.clasificacion
duracionp.textContent=peliculaampliada.duracion
generop.textContent=peliculaampliada.genero
paisp.textContent=peliculaampliada.pais
descripcionp.textContent=peliculaampliada.descripcion
videop.src=peliculaampliada.video

