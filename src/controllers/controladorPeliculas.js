import {peliculasDB} from '../helpers/databasePeliculas.js'
import {categoriasDB} from '../helpers/databaseCategoriaPeliculas.js'

import {pintarBotonesCategorias} from './controladorBotonesCategorias.js'
import {pintarPeliculas} from './controladorPintarPeliculas.js'

import {activarservicio,activarservicio2} from './controladorMoviedb.js'

let peliculas = await activarservicio()
let nombre = await activarservicio2()
console.log(peliculas.url)
console.log(nombre.title)

pintarBotonesCategorias(categoriasDB)


let botonInformacionPeliculas=document.getElementById("btn-informacion-peliculas")
botonInformacionPeliculas.addEventListener("mouseout",function(evento){

	botonInformacionPeliculas.classList.remove("text-white")
	botonInformacionPeliculas.classList.add("text-dark")
})
botonInformacionPeliculas.addEventListener("mouseleave",function(evento){
	botonInformacionPeliculas.classList.remove("text-dark")
	botonInformacionPeliculas.classList.add("text-white")
})



let fila = document.getElementById("fila")
fila.addEventListener("click",function(evento){

	if(evento.target.parentElement.classList.contains("tarjeta") == true ){
      window.location.href='./reservacion.html'
	}

})
let columna = document.createElement("div")
		columna.classList.add("col","col-12","col-md-2","card","p-0","columna","tarjeta2","pointer")

let nombre1 = document.createElement("h2")
nombre1.classList.add("fw-bold","fs-6","card-text","text-black")
nombre1.textContent=nombre.title

let foto = document.createElement("img")
foto.classList.add("img-fluid","w-100")
foto.src=peliculas.url


columna.appendChild(foto)
columna.appendChild(nombre1)
fila.appendChild(columna)